var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var BookScheme = mongoose.Schema({
  title: {
    default: "XYZ BOOK DEPOT",
    type: String,
  },
  description: {
    default: "One time story & location    ",
    type: String,
  },
  rating: {
    default: "4.3",
    type: String,
  },
  Price: {
    default: "688",
    type: String,
  },
  auther: {
    default: "XYZ Author",
    type: String,
  },
});

var book = mongoose.model("Book", BookScheme);
module.exports.book = book;
//for sign up
// module.exports.validateUserLogin = validateUserLogin; // for login
