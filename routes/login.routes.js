const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/User.model');
const mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

//LOGIN//
router.get('/auth/login', (req, res, next) => res.render('login'));

router.post('/login', (req, res, next) => {
  console.log('SESSION =====> ', req.session);
  const { email, password } = req.body;
  console.log(req.body)

  if (email === '' || password === '') {
    res.render('login', {
      errorMessage: 'All fields are mandatory. Please provide your email and password.'});
    return;
  }

  User.findOne({ email })
    .then(user => {
      console.log('searching for email registation')
      if (!user) {
        res.render('login', { errorMessage: 'Email is not registered. Try with other email.' });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
       
//*** Save user ***//
       req.session.currentUser = user;
        res.redirect('profile-user');
      }else {
        res.render('auth/login', {errorMessage: 'Incorrect password'});
      }
    })
    .catch(error => next(error));
  });

//LOGOUT//
router.post("/logout", (req,res) => {
  req.session.destroy();
  res.redirect("/")
})

router.get("profile-user", (req, res, next) => {
  res.render("profile-user", {userInSession: req.session.currentUser})
})

module.exports = router;
