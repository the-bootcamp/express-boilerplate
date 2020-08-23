## Description

In creating  UNUM, we want to help those who have lost their jobs because of the Coronavirus. In order to support them to earn some "money" to face expenses, once people Sign In at UNUM they offer the ability to perform some tasks (home oriented). The app will facilitate the match between job owner and skill provider.


## User Stories

- *Homepage* - As a user I want to be able to access the homepage and be able to sign up or login.
- *404 page* - As a user I want to see an error page when an error happens.
- *Sign up as a job owner* - As a job owner I want to sign up on the webpage and be able to ask for someone to perform a job.
- *Sign up as a skill provider* - As a skill provider I want to sign up on the webpage so that I can create a profile and add the skills I'm able to provide. 
- *As a user* - I want to be able to log out from the webpage so that I can make sure no one will access my account.
- *As a user* - I want to check my profile information and be able to edit or delete it.
- *As a skill provider* - I want to be able to see the list of jobs, be able to acceot jobs and access the job owner's contact details.
- *As a job owner* - I want to be able to see the details of the skill provider who will complete my job.
- *As a user* - I want to be able to report a problem.



## List of other features outside of the MVPs scope - Backlog

- Rate the provider
- Responsive design
- Partials
- Sign up/in with Google or Facebook
- Match Requester and Provider via an Geolocation API
- Add a contact form
- Volunteering option


## ... ROUTES

GET / 
renders index.hbs
Log-in button redirects to /login.hbs 
Sign-up button redirects to /auth/signup.hbs


GET /login
renders login.hbs

POST /login
creates new user session
redirects to /profile-jobowner if details relate to job owner
redirects to /profile-skillprovider if details relate to skill provider

GET /auth/signup 
renders signup.hbs 
redirects to /signup

POST /signup
creates new User Model
creates new user session
creates new Job Model if new user is job owner
renders /profile-jobowner if new User is job owner
creates new Skill Model if new user is skill provider
renders /profile-skillprovider if new User is skill provider

GET /rules
renders rules.hbs in new tab/window
back button closes tab/window

GET /jobowner/edit
renders /profile-jobowner/edit.hbs

POST /jobowner/edit
edits User Model
renders /profile-jobowner with edited details

POST /jobowner/delete
deletes User model
renders /index/delete.hbs

GET /skillprovider/edit
renders /profile-skillprovider/edit.hbs

POST /skillprovider/edit
edits User Model
renders /profile-skillprovider with edited details

POST /skillprovider/delete
deletes User model
renders /index/delete.hbs

GET /jobslist
renders job-list.hbs showing list of jobs from database

GET /jobdetails/:id
renders job-details.hbs with details of job selected by id

POST /jobdetails/:id
edits Job Model to show job has been assigned to skill provider
edits skill provider user model to include link to job
renders profile-skillprovider displaying new job under current jobs list

GET /logout
ends user session
redirects to /index/log-out.hbs

GET /newjob
renders /create-job.hbs

POST /newjob
creates new Job model with entered details
edits User model of job owner with link to new Job model
renders /profile-jobowner displaying details of new job under current jobs

GET /error
renders /error.hbs


# Models

 *User model*
 
- 

 *Task model*
 
- 


 *Skill model*
 
- 
#Figma
https://www.figma.com/proto/qd2z6OeIE2ZV1RW38o45mz/Untitled?node-id=200%3A3&scaling=scale-down


# Trello

https://trello.com/invite/b/hQDFuTNB/78d48dc9c3b5d9224e27694fcd8cc47c/crafting-the-idea


# Git

The url to your repository and to your deployed project 

Repository Link
https://github.com/nuno-pacheco/UNUM

Deploy Link

# Slides

The url to your presentation slides

Slides Link
