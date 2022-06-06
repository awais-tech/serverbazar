const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");

const register = async (req, res, next) => {
  try {
    let user = new User(req.body);
    await user.generateHashedPassword();
    await user.save();
    let token = jwt.sign(
      { _id: user._id, name: user.name, role: "user", email: user.email },
      "jwtPrivateKey"
    );
    let datatoRetuen = {
      message: "Account Created Successfully",
      token: token,
      id: user._id,
    };
    return res.status(200).send(datatoRetuen);
  } catch (error) {
    return res.send({ error: error });
  }
};
module.exports = { register };
