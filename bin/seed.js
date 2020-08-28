const mongoose = require('mongoose');
const DB_NAME = 'UNUM';
const User = require('../models/User.model.js');
const Skill = require('../models/Skill.model.js');
const Job = require('../models/Job.model.js');

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const user = [
  {
    name: 'Admin',
    email: 'admin@email.com',
    telephone: '061234567', 
    address: '12 Admin Street, Administration',
    passwordHash:'1234ABab',
    skillprovider: 'false',
    additionalinformation: 'Super-user',
    jobowner: 'false',
    skills: [],
    jobs: [],
    signupagreement: 'true'
]

User.create(user)
  .then(userFromDB => {
    console.log(`Created new super user:${userFromDB} with id:${userFromDB._id}`);
  })
  .catch(err =>
    console.log(`An error occurred while getting super user from the DB: ${err}`)
  );

const skills = [
  {
    selectDescription:'Painting and decorating',
    skillprovider:[]
  },
  {
    selectDescription:'Babysitting',
    skillprovider:[]
  },
  {
    selectDescription:'Cooking',
    skillprovider:[]
  },
  {
    selectDescription:'Web development',
    skillprovider:[]
  },
  {
    selectDescription:'Cleaning',
    skillprovider:[]
  },
  {
    selectDescription:'Woodwork and general repairs',
    skillprovider:[]
  },
  {
    selectDescription:'Gardening',
    skillprovider:[]
  },
  {
    selectDescription:'Ironing',
    skillprovider:[]
  },
  {
    selectDescription:'Homework help and tutoring',
    skillprovider:[]
  },
  {
    selectDescription:'Hairdressing',
    skillprovider:[]
  },
  {
    selectDescription:'Car washing (inside and out)',
    skillprovider:[]
}
];
Skill.create(skills)
  .then(skillsFromDB => {
    console.log(`Created ${skillsFromDB.length} skills`);
  })
  .catch(err =>
    console.log(`An error occurred while getting skills from the DB: ${err}`)
  );

  const jobs = [
    {
      selectDescription: 'Painting and decorating',
      image: '/images/icons/paintinganddecorating.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Babysitting',
      image: '/images/icons/babysitting.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Cooking',
      image: '/images/icons/cooking.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Web development',
      image: '/images/icons/web development.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Cleaning',
      image: '/images/icons/cleaning.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Woodwork and general repairs',
      image: '/images/icons/carpenter.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Gardening',
      image: '/images/icons/gardening.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Ironing',
      image: '/images/icons/ironing.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Homework help and tutoring',
      image: '/images/icons/homework.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Hairdressing',
      image: '/images/icons/hairdresser.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
    },
    {
      selectDescription:'Car washing (inside and out)',
      image: '/images/icons/carwashing.png',
      additionalInformation: 'Example for icon',
      jobowner: [],
      jobstatus: 'completed',
      allocation: [],
  }
  ];
  Job.create(jobs)
    .then(jobsFromDB => {
      console.log(`Created ${jobsFromDB.length} jobs`);
      mongoose.connection.close();
    })
    .catch(err =>
      console.log(`An error occurred while getting jobs from the DB: ${err}`)
    );
  
