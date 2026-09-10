from functools import lru_cache
from hashlib import sha256
from pathlib import Path

from flask import Flask, render_template, url_for

app = Flask(__name__)


@lru_cache(maxsize=None)
def static_asset_version(filename):
    """Return a content hash so browsers never mix assets from different releases."""
    asset_path = Path(app.static_folder) / filename
    return sha256(asset_path.read_bytes()).hexdigest()[:12]


def static_asset(filename):
    return url_for('static', filename=filename, v=static_asset_version(filename))


app.jinja_env.globals['static_asset'] = static_asset


@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    response.headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=()'
    return response


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/logo-manual')
def logo_manual():
    return render_template('logo-manual.html')


@app.route('/_ah/warmup')
def warmup():
    return '', 200


if __name__ == '__main__':
    # Local Windows testing uses the built-in Flask server
    app.run(host='127.0.0.1', port=8080, debug=True)
