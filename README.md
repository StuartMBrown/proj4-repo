# proj4-repo

The Sentimentality of Circulation


Stuart Brown
Stephanie Carlson
Matt Hill
Nathan Kaspar
Josh Soundarajan

##Table of Contents
###Project Outline
###Why this dataset?
###Findings summary
###Datasets/resources

#Project Outline:
A machine learning evaluation of the emotion, positive or negative, of 1.6 million tweets from 2009. Our model will learn various keywords identified by ChatGPT's WordCloud plugin as having a certain emotional connotation.

Upon discovering our set had no neutral keywords, we dummied them into positives or negatives, after assigning each tweet a sentiment based on WordCloud's classifications.

We then ran the model through train-test split to see if it could identify the sentiment on its own. We sent the data to an HTML for interactivity, and crafted visualizations to explain some of our findings.

#Why this dataset?
Training an AI with data of this magnitude will not only allow other AIs to recognize the emotional charge of certain words, but also to understand if they may be used in unorthodox contexts. At this size, takeaways would be meaningful but also not overdemanding in terms of resources and time.

#Findings summary 
VaderSentiment
Accuracy Score:  0.8470225
Precision: 0.8507783927062014
Recall: 0.8470225
F1 Score: 0.8459390728898293

TextBlobs
Accuracy Score:  0.856185
Precision: 0.8598559899324191
Recall: 0.856185
F1 Score: 0.8533827640080314

#Datasets/Resources
Kaggle: https://www.kaggle.com/datasets/kazanova/sentiment140
Twitter Search: https://twitter.com/home
TextBlob: https://textblob.readthedocs.io/en/dev/authors.html
VaderSentiment authors: https://github.com/cjhutto/vaderSentiment
VaderSentiment assistance: https://www.analyticsvidhya.com/blog/2022/07/sentiment-analysis-using-python/

