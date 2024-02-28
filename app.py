# app.py

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    if request.method == 'POST':
        sentence = request.form['sentence']
        # Call your sentiment analysis function here
        # For now, let's just return the input sentence
        return sentence

if __name__ == '__main__':
    app.run(debug=True)
