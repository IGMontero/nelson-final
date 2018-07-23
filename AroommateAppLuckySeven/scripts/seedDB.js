const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/roommatequest",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    name: "John Doe",
    gender: "male",
    age: 23,
    preferences: [
      "pool",
      "gym"
    ],
    accountType: "has",
    profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    name: "Mary Smith",
    gender: "female",
    age: 27,
    preferences: [
      "internet",
      "parking"
    ],
    accountType: "need",
    profileImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    name: "Bob Roberts",
    gender: "male",
    age: 21,
    preferences: [
      "internet",
      "gym",
      "pool"
    ],
    accountType: "has",
    profileImage: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    name: "Ashley Perez",
    gender: "female",
    age: 29,
    preferences: [
      "pool",
      "gym",
      "internet"
    ],
    accountType: "need",
    profileImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    name: "Aadam Mayo",
    gender: "male",
    age: 42,
    preferences: [
      "parking",
      "gym",
    ],
    accountType: "has",
    profileImage: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    name: "Humayra Mcconnell",
    gender: "female",
    age: 21,
    preferences: [
      "internet",
      "pool",
    ],
    accountType: "need",
    profileImage: "https://images.pexels.com/photos/875862/pexels-photo-875862.png?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    name: "Hector Pike",
    gender: "male",
    age: 35,
    preferences: [
      "pool",
      "parking",
      "gym"
    ],
    accountType: "has",
    profileImage: "https://images.pexels.com/photos/213117/pexels-photo-213117.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    name: "Ellen Mueller",
    gender: "female",
    age: 28,
    preferences: [
      "pool",
      "parking",
      "internet"
    ],
    accountType: "need",
    profileImage: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    name: "Ravi Snow",
    gender: "male",
    age: 33,
    preferences: [
      "pool",
    ],
    accountType: "has",
    profileImage: "https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    name: "Ravi Snow",
    gender: "female",
    age: 33,
    preferences: [
      "pool",
      "internet",
      "gym"
    ],
    accountType: "need",
    profileImage: "https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  }
];

  db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
    })
    .catch(err => {
      console.error(err);
    });
