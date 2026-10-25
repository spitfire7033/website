from functools import lru_cache
from hashlib import sha256
from pathlib import Path

from flask import Flask, Response, redirect, render_template, url_for

from site_data import LOGO_VARIANTS, PAGES, PROJECTS

app = Flask(__name__)


@lru_cache(maxsize=None)
def _cached_asset_version(filename):
    asset_path = Path(app.static_folder) / filename
    return sha256(asset_path.read_bytes()).hexdigest()[:12]


def static_asset_version(filename):
    """Return a content hash so browsers never mix assets from different releases."""
    if app.debug:
        asset_path = Path(app.static_folder) / filename
        return sha256(asset_path.read_bytes()).hexdigest()[:12]
    return _cached_asset_version(filename)


def static_asset(filename):
    return url_for('static', filename=filename, v=static_asset_version(filename))


app.jinja_env.globals['static_asset'] = static_asset


@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    response.headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=()'
    return response


def render_portfolio(lang):
    page = PAGES[lang]
    return render_template(
        'index.html',
        page=page,
        lang=lang,
        projects=PROJECTS,
        logo_variants=LOGO_VARIANTS,
    )


@app.route('/')
def index():
    return render_portfolio('cs')


@app.route('/en')
def index_en():
    return render_portfolio('en')


@app.route('/en/')
def index_en_slash():
    return redirect(url_for('index_en'), code=301)


@app.route('/logo-manual')
def logo_manual():
    return redirect(url_for('index') + '#brand', code=301)


@app.route('/robots.txt')
def robots_txt():
    body = (
        "User-agent: *\n"
        "Allow: /\n"
        "Sitemap: https://alfonswalker.com/sitemap.xml\n"
    )
    return Response(body, mimetype='text/plain')


@app.route('/sitemap.xml')
def sitemap_xml():
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
        '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        '  <url>\n'
        '    <loc>https://alfonswalker.com/</loc>\n'
        '    <xhtml:link rel="alternate" hreflang="cs" href="https://alfonswalker.com/"/>\n'
        '    <xhtml:link rel="alternate" hreflang="en" href="https://alfonswalker.com/en"/>\n'
        '    <xhtml:link rel="alternate" hreflang="x-default" href="https://alfonswalker.com/"/>\n'
        '  </url>\n'
        '  <url>\n'
        '    <loc>https://alfonswalker.com/en</loc>\n'
        '    <xhtml:link rel="alternate" hreflang="cs" href="https://alfonswalker.com/"/>\n'
        '    <xhtml:link rel="alternate" hreflang="en" href="https://alfonswalker.com/en"/>\n'
        '    <xhtml:link rel="alternate" hreflang="x-default" href="https://alfonswalker.com/"/>\n'
        '  </url>\n'
        '</urlset>\n'
    )
    return Response(xml, mimetype='application/xml')


@app.route('/_ah/warmup')
def warmup():
    return '', 200


if __name__ == '__main__':
    # Local Windows testing uses the built-in Flask server
    app.run(host='127.0.0.1', port=8080, debug=True)
