## Description

In creating  UNUM, we want to help those who have lost their jobs because of the Coronavirus. In order to support them to earn some "money" to face expenses, once people Sign In at UNUM they offer the ability to perform some tasks (home oriented). The app will facilitate the match between job owner and skill provider.


## User Stories

- *Homepage* - As a user I want to be able to access the homepage and be able to sign up or login. - DONE
- *404 page* - As a user I want to see an error page when an error happens. - DONE
- *Sign up as a job owner* - As a job owner I want to sign up on the webpage and be able to ask for someone to perform a job. - DONE
- *Sign up as a skill provider* - As a skill provider I want to sign up on the webpage so that I can create a profile and add the skills I'm able to provide. - DONE
- *As a user* - I want to be able to log out from the webpage so that I can make sure no one will access my account.
- *As a user* - I want to check my profile information and be able to edit or delete it. ***NUNO***
- *As a skill provider* - I want to be able to see the list of jobs, be able to accept jobs and access the job owner's contact details.***LYNN***
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

GET / - DONE
renders index.hbs
Log-in button redirects to /login.hbs 
Sign-up button redirects to /auth/signup.hbs


//1 GET /login - DONE
renders login.hbs

//1 POST /login - DONE
creates new user session
redirects to /profile-jobowner if details relate to job owner
redirects to /profile-skillprovider if details relate to skill provider

//2 GET /auth/signup - DONE
renders signup.hbs 
redirects to /signup

//2 POST /signup - DONE
creates new User Model
creates new user session
creates new Job Model if new user is job owner
creates new Skill Model if new user is skill provider
renders /profile-user 

//2 GET /rules - DONE
renders rules.hbs in new tab/window
back button closes tab/window

//3 ***NUNO*** GET /user/edit
renders /profile-user/edit.hbs

//3 ***NUNO*** POST /user/edit
edits User Model
renders /profile-user with edited details

//3 ***NUNO*** POST /user/delete
deletes User model
renders /index/delete.hbs

//4 GET /jobslist - DONE
renders job-list.hbs showing list of jobs from database

//4 ***LYNN*** GET /jobdetails/:id
renders job-details.hbs with details of job selected by id

//4 ***LYNN*** POST /jobdetails/:id
edits Job Model to show job has been assigned to skill provider
edits user model to include link to job
renders profile-user displaying new job under current jobs list

//1 GET /logout - DONE
ends user session
redirects to /index/log-out.hbs

//4 GET /newjob
renders /create-job.hbs

//4 POST /newjob
creates new Job model with entered details
edits User model of job owner with link to new Job model
renders /profile-user displaying details of new job under current jobs

//5 GET /error
renders /error.hbs


# Models

 *User model*

    new Schema ({
      name: String, required: true,
      email: String, required: true,
      telephone: String, required: true, length: 9, 
      address: String, required: true, maxlength: 30,
      passwordHash: String, length: 6,
      type: String, required: true,
      skills: Skill ids,
      jobs: Job ids, 
    })



 *Job model*
 
    new Schema ({
      selectDescription: Mixed,
      image: String,
      additionalInformation: String, required: true,
      jobowner: User id, required: true,
      jobstatus: String, required: true,
      allocation: User id,
    })


 *Skill model*
 
    new Schema ({
      selectDescription: Mixed, required: true,
      additionalInformation: String, 
      skillprovider: User id, required: true,
    })




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
