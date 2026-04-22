from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    # Local Windows testing uses the built-in Flask server
    app.run(host='127.0.0.1', port=8080, debug=True)