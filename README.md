## Makers Academy Daily Review App [![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)

* [The Problem](#the-problem)
* [The Solution](#the-solution)
* [Our Approach & Technologies](#our-approach-and-technologies)
* [User Stories](#user-stories)
* [App Usage and Features](#app-usage-and-features)
* [Demo App](#demo-app)
* [Download Instructions](#download-instructions)
* [Contributors](#contributors)

## The Problem

In order for Makers Academy staff to receive feedback from all their current students, the students are required to complete a weekly learning plan whereby they would detail their achievements and difficulties etc. for the week. However, as students ourselves, we quickly realized that the majority were not filling their plans in each week. Therefore the coaches were not getting enough feedback from the students.

Another problem was that students could only give constructive feedback on the week's challenges in the Friday retro session. This therefore made it too late for the coaches to make any changes to the challenges based on the feedback given.

## The Solution

We had **3 days** to build an app that would solve this problem.

We firstly built our own [Slackbot](https://github.com/hsheikhm/daily-review-slackbot) which sends a message to all students once everyday. Within the message is a link to a website which we created. The website allows the students to login (via GitHub) and then complete a very short feedback form where they can express concerns about the week's challenges, pairing sessions and even how they're feeling in general. On the other side, the coaches have a separate login. Once logged in, they can see the results of the students' feedback in a nicely visiualized manner. They can also easily see those students who are struggling more than others.

## Our Approach and Technologies

|        | Tasks Completed |
|:------:|:----------------|
| **Day 1**  | Created **Slackbot**. Set up website and login functions. Built the feedback form in **Angular JS**. Also set up a **Firebase** database and tested that data was getting stored from website. |
| **Day 2**  | Restructured database to make it simpler to retrieve data. Created separate platform for coaches in **Angular** and started to display data from **Firebase** in real-time. Created data display formats. |
| **Day 3**  | Completed styling using **HTML**, **CSS**, **Angular** and **Bootstrap**. Deployed app to **Firebase** using a **Node JS** server. Refactored **Angular** code into several directives and factories. |

We also stuck to regular **stand-ups** and made sure that we were always **pairing**. Unfortunately, due to the 3 day timeframe we didn't have any time for **testing**. This is something that we are currently working on.

## User Stories

#### Student:

```
As a Student
So that I can remember to give feedback about the course
I want to receive a Slack message everyday that reminds me to complete a form

As a Student
So that I can easily enter the feedback website
I want to be able to login with my own GitHub account

As a Student
So that I can provide detailed feedback
I want to explain my reasons for giving a bad rating about anything

As a Student
So that I can provide daily feedback
I want to submit my responses to a brief list of questions
```
#### Coach:

```
As a Coach
So that I can securely login to the feedback website to view the results
I want to have a separate login from the students

As a Coach
So that I can easily get an idea of how a cohort is doing
I want to see data for each cohort

As a Coach
So that I can see how students are getting on each day
I want to see a list of average ratings for their feedback responses

As a Coach
So that I can identify which students need more help
I want to track those students who are struggling more than others
```

## App Usage and Features

***Student can login to daily review app via GitHub:***

![Login Page](https://github.com/hsheikhm/Github-Images/blob/master/daily-review-app/login-student-page.png)

***Student can complete feedback form:***

![Form Page](https://github.com/hsheikhm/Github-Images/blob/master/daily-review-app/form-page.png)

***Coach can view results from students' feedback:***

![Coach Page](https://github.com/hsheikhm/Github-Images/blob/master/daily-review-app/coaches-page.png)

## Demo App

Visit the link below to see a live version of the app.

[Makers Academy Daily Review App](https://shining-fire-9962.firebaseapp.com/)

## Download Instructions

Install [Node JS](https://nodejs.org/en/)

```
$ git clone git@github.com:hsheikhm/daily_review_app.git
& cd daily_review_app
$ npm install
$ bower install
$ npm start
(On your browser visit: http://localhost:8000/)
```
Create Firebase database and deploy the application
<br>
Change the ref variables in controllers to point to your database url

## Contributors
[Chuka Ebi](https://github.com/ChukaEbi) | [Hamza Sheikh](https://github.com/hsheikhm) | [Mahmud Hussain](https://github.com/mahmudh)
