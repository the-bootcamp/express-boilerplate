const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/User.model');
const mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/auth/signup', (req, res, next) => res.render('signup'));

router.post('/signup', (req, res, next) => {
    console.log('signup form submitted')
    const { name, email, telephone, address, passwordHash } = req.body;
    console.log(req.body);

    if ((email === "" || passwordHash === "")) {
      res.render('signup', { errorMessage: 'All fields are mandatory. Please provide your email and password.' });
      return
    } 

    User.findOne({ email })
    console.log('searching for user with same email')
    .then((user) => {
      if(user){
        res.render('signup', {errorMessage: 'Email must be unique'});
      }
    })
    
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(passwordHash)) {
      res.status(500).render('signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
      return;
    }
  
    bcrypt
      .genSalt(saltRounds)
      .then(salt => bcrypt.hash(passwordHash, salt))
      .then(hashedPassword => {
        console.log(hashedPassword)
        return User.create({
          name,
          email,
          telephone,
          address,
          passwordHash: hashedPassword
        });
      })
      .then(userFromDB => {
        console.log('Newly created user is: ', userFromDB);
        res.render('profile-user', userFromDB);
      })
      .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.status(500).render('signup', { errorMessage: error.message });
        } else if (error.code === 11000) {
          res.status(500).render('signup', {
            errorMessage: 'Email must be unique. Email is already in use.'
          });
        } else {
          next(error);
        }
      }); 
  });

  module.exports = router;
