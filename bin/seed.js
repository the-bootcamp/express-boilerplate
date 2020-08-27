const mongoose = require('mongoose');
const DB_NAME = 'UNUM';
const Skill = require('../models/Skill.model.js');

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while getting skills from the DB: ${err}`)
  );
