const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/User.model");
const Skill = require("../models/Job.model");
const Job = require("../models/Job.model");
const mongoose = require("mongoose");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/profile-user", (req, res, next) => res.render("profileuser"));

module.exports = router;