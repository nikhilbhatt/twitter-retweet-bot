# twitter-retweet-bot

# HERE ARE FEW RESOURCES WHICH MIGHT BE HELPFUL

https://www.npmjs.com/package/twit
https://github.com/ttezel/twit

Know more about searching of tweets HERE:-
https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets


Steps to deploy your app to Heroku->
go to heroku and create your app and follow the basic commands. below are some additional information->

1.Make sure your important file is not ignored by .gitignore while deploying app to heroku.

2.Create a new File named 'Procfile' and set the( worker: 'starting file')

3.add start file in package.json

4.Use ---git push heroku master--- to push your commits

5.While deploying your app to heroku you have to set your server port other than 3000 otherwise it will give an error.

6.use ---heroku logs--- to see log file.

****7.use babel-node if an error persist while deploying the app****

for more information go to heroku documentation
