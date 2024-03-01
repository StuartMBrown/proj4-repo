from flask import Flask, render_template, request
from transformers import AutoModelForSequenceClassification, AutoTokenizer
from scipy.special import softmax
import numpy as np

app = Flask(__name__)

# Load the sentiment analysis model and tokenizer
MODEL = "cardiffnlp/twitter-roberta-base-sentiment"
tokenizer = AutoTokenizer.from_pretrained(MODEL)
model = AutoModelForSequenceClassification.from_pretrained(MODEL)

# Function to perform sentiment analysis
def analyze_sentiment(sentence):
    # Tokenize and preprocess the input sentence
    inputs = tokenizer(sentence, return_tensors="pt", truncation=True, padding=True)
    # Perform inference
    outputs = model(**inputs)
    scores = outputs.logits.detach().cpu().numpy()[0]
    scores = softmax(scores)
    # Get the predicted sentiment label
    sentiment_label = np.argmax(scores)
    return sentiment_label, scores

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    if request.method == 'POST':
        sentence = request.form['sentence']
        # Perform sentiment analysis
        sentiment_label, scores = analyze_sentiment(sentence)
        
        # Debugging: Print sentiment label and scores
        print("Sentiment Label:", sentiment_label)
        print("Scores:", scores)
        
        # Return the sentiment analysis result
        return render_template('result.html', sentence=sentence, sentiment_label=sentiment_label, scores=scores)

if __name__ == '__main__':
    app.run(debug=True)
