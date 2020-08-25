const express = require('express');
const router = express.Router();

/* GET landing page */
router.get('/', (req, res, next) => res.render('index'));

/* GET signup page */
router.get('/signup', (req, res, next) => res.render('signup'));






module.exports = router;