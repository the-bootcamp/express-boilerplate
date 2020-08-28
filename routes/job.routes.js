const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const Skill = require("../models/Job.model");
const Job = require("../models/Job.model");
const mongoose = require("mongoose");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/jobslist", (req, res, next) => {
    Job.find({ jobstatus: 'current'})
    .then((jobsFromDB) => res.render("jobslist", {jobsFromDB}))
    .catch((error) => res.render("profileuser", { errorMessage: "Problem retrieving jobs from database" }))
})
    
module.exports = router;