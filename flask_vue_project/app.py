from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def intro():
    return render_template('intro.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/sources')
def sources():
    return render_template('sources.html')

@app.route('/index')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
