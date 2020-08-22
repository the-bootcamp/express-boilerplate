# express-boilerplate
Boilerplate with bootstrap cdn 
## Setup
 1) npm install to install the node_modules 
 2) create a .env file based on this information 
  PORT=3000
  ENV=development
  DB_NAME=myDatabase
  CLOUDINARY_NAME= cloudinaryName
  CLOUDINARY_KEY= cloudinaryKey
  CLOUDINARY_SECRET= cloudinarySecret

## Project 2: Foodle

## Description
Get and create food recipes
<br>

## User stories
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **login-signup** - As a user I want to see a welcome page that gives me the option to either log in as an existing user, or sign up with a new account. 
- **add-signup** - As a user I want to sign up with my full information so that I can acces and create recipes.
- **landing page** - On the landing page I want to see what the website is about and see created recipes, but to acces their content I need to be a loged in user.
- **home page** - As a loged in user I want to see what the created recipes, be able to create a recipe, search and filter for specific recipes and categories and go to my profile page.
- **search results** - As a user I want to see the search results with a image, title, cuisine, category and discription.
- **filter results** - As a user I want to filter recipes by cuisine, category, level, preparation time and vegan and vegetarian dishes.
- **user-profile page** - As a user I want to check my profile information and be able to edit it, and add new recipes to the database and see recipes that I've already created.
- **add recipe page** - As a user I want to create new recipes by filling a form that includes a title, description, level, cuisine, category, preparation time, image, and if it's a vegan or vegetarion dish
<br>

## API routes (back-end)

- GET / 
  - renders login-signup.hbs
- GET /auth/signup
  - redirects to / if user logged in
  - renders add-signup.hbs
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - email
    - password
    - user name
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)

- GET /
  - renders homepage.hbs
- POST /homepage (search action)
  - body: 
    - image
    - title
    - level
    - cuisine
    - category
- GET /recipe-search-results
  - renders recipe-search-results.hbs
  - list of specific recipes that are the result of the search input

  
- GET /profile
  - renders user-profile.hbs
  - redirects to / if user presses button
- POST /profile (to edit profile)
  - redirects to /add-signup (we reuse it but for edit purposes)
  - body:
    - email
    - password
    - username
- POST /profile
  - body:
    - username
    - list of created recipes and be able to edit or delete
    - form to create a recipe (similar to the form of the create-recipe-page)
- GET /profile
  - renders user-profile.hbs updated

<br>

## Models
 
 - User 

 const userSchema = new Schema({
  nickname: {
    type: String,
    trim: true,
    required: [true, 'Username is required.'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: [true, 'Password is required.']
  },
  isPremium: Boolean
});

- Recipe 

const recipeSchema = new Schema({
  title: String,
  level: {String, enum: ['Easy', 'Amateur', 'Professional' ]},
  ingredients: [ String],
  dishType: {String, enum: ['breakfast', 'starter','main_course', 'soup', 'snack', 'shake', 'dessert', 'other']},
  image: {type: String, default: ''},
  duration: {type: Number, min: 0},
  creator: String,
  created: {type: Date, default: Date.now},
  isVegan: Boolean,
  isVegetarian: Boolean,
  Description: String,
  premiumContent: String
});

<br>
    
## Backlog

 - main.hbs
    - Featured recipes
    - Description of purpose website
    
 - Admin User
    - Can edit and delete all recipes
    - Able to block or delete other users
    - And create featured recipes
    
 - Premium Content
    - Premium user (set as bolean) gets extra content such as video 
    
 - Images added by users
    - Find the best how users can upload images
    
<br>

## Links
[Trello Link](https://trello.com/b/y9y21NaE/2nd-project-no-name)


### Git
[Repository Link](https://github.com/AmanoLX/ProjectTwo)

[Deploy Link](...)

<br>

### Slides
[...]()