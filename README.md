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
A machine learning evaluation of the emotion, positive or negative, of 1.6 million tweets from 2009. Our model will learn the emotional connotation of various keywords identified by Bag of Words and BERT.


Upon discovering our original set had no "neutral" keywords, we assigned each tweet a sentiment based on the Bag of Words and BERT classifications and added a neutral sentiment for tweets that had low sentimental polarization. We drafted three models; one for RoBERT, one for TextBlobs, and one for VaderSentiment. All three of these software analyze Tweet-like text accumulations for emotional value.


We then ran the model through train-test split to see if it could identify the sentiment on its own. We sent the data to a Flask-enhanced HTML for interactivity, allowing users to test their own Tweetable phrases for perceived sentiment.

We finished by evaluating all three models for precision, and compared the original CSV's classification reports to those of a post-cleaning CSV.


#Why this dataset?
Training an AI with data of this magnitude will not only allow other AIs to recognize the emotional charge of certain words, but also to understand if they may be used in unorthodox contexts. At this size, takeaways would be meaningful but also not overdemanding in terms of resources and time. This provides more empathetic and context aware interactions between AI and humans, and makes AI both more ethical and suitable for wide deployment.


We expect that the following fields will find our efforts especially helpful:

* Customer service feedback
* Marketing 
* Public opinion analysis 
* User experience




#Findings summary 
Uncleaned VaderSentiment
Accuracy Score:  0.8470225
Precision: 0.8507783927062014
Recall: 0.8470225
F1 Score: 0.8459390728898293


Uncleaned TextBlobs
Accuracy Score:  0.856185
Precision: 0.8598559899324191
Recall: 0.856185
F1 Score: 0.8533827640080314


Cleaned VaderSentiment
Accuracy Score:  0.8470225
Precision: 0.8507783927062014
Recall: 0.8470225
F1 Score: 0.8459390728898293


Cleaned TextBlobs
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

