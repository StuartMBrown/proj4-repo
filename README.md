# proj4-repo

The Sentimentality of Circulation


Stuart Brown
Stephanie Carlson
Matt Hill
Nathan Kaspar
Josh Soundarajan

Project Outline:
A machine learning evaluation of the emotion, positive or negative, of 1.6 million tweets from 2009. Our model will learn various keywords identified by ChatGPT's WordCloud plugin as having a certain emotional connotation.

Upon discovering our set had no neutral keywords, we dummied them into positives or negatives, after assigning each tweet a sentiment based on WordCloud's classifications.

We then ran the model through train-test split to see if it could identify the sentiment on its own. We sent the data to an HTML for interactivity, and crafted visualizations to explain some of our findings.s

Utilize a Kaggle dataset to train a machine learning model to classify tweets based on a sentiment (0 = negative, 2 = neutral, 4 = positive).
    Call ChatGPT API to identify keywords via wordcloud incorporation.
    Dummy encode each keyword.
    Use train/test split to identify sentiment.
    We want targeting to eclipse 80% accuracy.
    
Create visualization of dataset for better understanding

Create User Interface for submission of a tweet
Model will then output the sentiment and keywords based on the training data and ChatGPT API call

Datasets/Resources
Kaggle: https://www.kaggle.com/datasets/kazanova/sentiment140
Twitter Search: https://twitter.com/home

