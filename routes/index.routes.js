const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const mongoose = require('mongoose');
const User = require('../models/User.model');
const Recipe = require('../models/Recipe.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET signup page */
router.get('/signup', (req, res, next) => res.render('auth/signup'));

router.post('/signup', (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
    return
  }
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        username,
        email,
        passwordHash: hashedPassword
      });
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      req.session.currentUser = userFromDB;

      res.redirect('/recipes');
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth/signup', { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render('auth/signup', {
          errorMessage: 'Username and email need to be unique. Either username or email is already used.'
        });
      } else {
        next(error);
      }
    });
});



/* GET login page */
router.get('/login', (req, res, next) => res.render('auth/login'));


router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }

  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {

        req.session.currentUser = user;

        res.redirect('/recipes');
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
});

/* GET user profile page */
router.get('/users/profile', (req, res) => {
  console.log(req.session)
  const { currentUser } = req.session;

  User.findById(currentUser._id)
    .then(userToDisplay => {
      console.log('this' + userToDisplay)
      Recipe.find({ creator: userToDisplay._id })
        .then(recipesToDisplay => {
                console.log('recipesToDisplay' + recipesToDisplay)
          res.render('user/userProfile', { recipesToDisplay, userToDisplay, userInSession: req.session.currentUser } );
        })
      })
    .catch(err =>
      console.log(`Err while getting the specific user profile from the  DB: ${err}`)
    );
});

// LOGOUT
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
