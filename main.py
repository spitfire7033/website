from flask import Flask, render_template

app = Flask(__name__)


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
