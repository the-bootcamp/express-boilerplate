## Description

In creating  UNUM, we want to help those who have lost their jobs because of the Coronavirus. In order to support them to earn some "money" to face expenses, once people Sign In at UNUM they offer the ability to perform some tasks (home oriented). The app will facilitate the match between requester and provider.


## User Stories

- *Homepage* - As a user I want to be able to access the homepage and be able to sign up or login.
- *404 page* - As a user I want to see an error page when an error happens.
- *Sign up as a requester* - As a requester I want to sign up on the webpage and be able to ask for someone to perform a task.
- *Sign up as a provider* - As a provider I want to sign up on the webpage so that I can create a profile and add the tasks I'm able to perform. 
- *As a user* - I want to be able to log out from the webpage so that I can make sure no one will access my account.
- *As a user* - I want to check my profile information and be able to edit or delete it.
- *As a provider* - I want to be able to create, edit or delete taks.
- *As a provider* - I want to be able to see the request from the requester.
- *As a requester* - I want to be able to seek for my ideal provider filtering by task and location.
//This sounds as though providers and requesters will search the database - is this what we want? or are we going to perform a matching service?


## List of other features outside of the MVPs scope - Backlog

- Rate the provider
- Responsive design
- Partials
- Sign up/in with Google or Facebook
- Match Requester and Provider via an Geolocation API
- Add a contact form
//- Volunteering option?


## ... ROUTES

GET / 

renders login.hbs
redirect to /profile-requester if logged in as requester
redirect to /profile-provider if logged in as provider

POST /login

GET /auth/signup 

renders signup.hbs if user press signup button
redirect to /signup
body: {
username
email
password
}

//need to add routes for entering tasks and/or skills plus compulsory information pages for corona precautions, how the app works and tax declaration.


# Models

 *User model*
- 

 *Task model*
 
- 


 *Skill model*
 
- 


# Trello

https://trello.com/b/hQDFuTNB/unum


# Git

The url to your repository and to your deployed project 

Repository Link

Deploy Link

# Slides

The url to your presentation slides

Slides Link
