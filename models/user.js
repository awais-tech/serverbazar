var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userSchema = mongoose.Schema({
  name: String,

  status: {
    default: 0,
    type: Number,
  },
  email: {
    type: String,
    required: true,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not valid`,
    },
  },
  password: {
    type: String,
    required: true,

    validate: {
      validator: function (v) {
        return v.length >= 3;
      },
      message: (props) => "Password must be longer then 3 character",
    },
  },
  role: {
    type: String,
    default: "user",
  },
});
userSchema.methods.generateHashedPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

userSchema.methods.isValidPassword = async function (password) {
  const user = this;
  console.log(user);
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};
var User = mongoose.model("User", userSchema);
module.exports.User = User;
//for sign up
// module.exports.validateUserLogin = validateUserLogin; // for login
