const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  gender: {type: String, required: true},
  age: {type: Number, required: true},
  preferences: [
    {
      type: String
    }
  ],
  accountType: {type: String},
  profileImage: {type: String}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
