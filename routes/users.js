var express = require("express");
const { login } = require("../controllers/userController/login");
const { register } = require("../controllers/userController/register");

const auth = require("../middleware/auth");
const {
  validatepasswordconfirm,
  validateEmailExist,
  valueNotEmpty,
  validateCorrectEmail,
  validateCorrectPassword,
} = require("../middleware/CustomValidator/CustomValidator");
const {
  validateUserLogin,
} = require("../middleware/CustomValidator/schemevalidation");
const { validate } = require("../middleware/CustomValidator/validatehandler");
const { validateUser, validatelogin } = require("../middleware/validateuser");
var router = express.Router();

router.post(
  "/register",
  validate([valueNotEmpty("email")]),
  validateUser,
  validatepasswordconfirm,
  validateEmailExist,
  register
);
router.post(
  "/login",
  validate([valueNotEmpty("email")]),
  validatelogin,
  validateCorrectEmail,
  validateCorrectPassword,
  login
);

module.exports = router;
