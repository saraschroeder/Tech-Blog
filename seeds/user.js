const { User } = require('../models');

const userData =
[
  {
    "username": "kayla",
    "email": "kayla@gmail.com",
    "password": "password12345"
  },
  {
    "username": "madison",
    "email": "madison@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "shannon",
    "email": "shannon@gmail.com",
    "password": "password12345"
  },
  {
    "username": "casey",
    "email": "casey@yahoo.com",
    "password": "password12345"
  },
  {
    "username": "sara",
    "email": "sara@gmail.com",
    "password": "password12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;