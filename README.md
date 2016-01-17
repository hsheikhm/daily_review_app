## Makers Academy Daily Review App

* [The Problem](#the-problem)
* [The Solution & Approach](#the-solution-and-approach)
* [User Stories](#user-stories)
* [App Usage and Features](#app-usage-and-features)
* [Demo App](#demo-app)
* [Download Instructions](#download-instructions)
* [Contributors](#contributors)

###Demo:
[Makers Academy Daily Review App](https://shining-fire-9962.firebaseapp.com/)

```
Log in through github
Fill in and submit a form
Log out and log in with email: admin@makers.com password: letmein
data page for coaches is displayed
```

### Installation:

Install [NodeJS](https://nodejs.org/en/)

```
git clone git@github.com:hsheikhm/daily_review_app.git
npm install
bower install
create firebase database and deploy the application
change the ref variables in controllers to point to your database url
```

####What is the project?
```
Students at Makers Academy fill in a review form everyday, which gets stored on
a database and displayed onto the coaches review page via data visualisation. Coaches can then understand
how students are feeling.
```
####How it works?
```
Slackbot sends a message with the web app url to individual students
A student fills in the form and clicks submit.
Coaches log in to the web app and they are shown the data collected from the
form.
```
####Technologies used?
```
Angular/HTML/CSS for front end development.
NodeJS/Firebase for back end.
Slackbot API.
```

####Contributors
[Chuka Ebi](https://github.com/ChukaEbi), [Hamza Sheikh](https://github.com/hsheikhm), [Mahmud Hussain](https://github.com/mahmudh).
