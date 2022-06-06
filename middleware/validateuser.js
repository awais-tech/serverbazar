const {
  validateUserRegister,
  validateUserLogin,
} = require("./CustomValidator/schemevalidation");

function validateUser(req, res, next) {
  const { name, email, password } = req.body;
  let { error } = validateUserRegister({ name, email, password });

  if (error) return res.status(400).send({ error: error.details[0].message });
  next();
}

function validatelogin(req, res, next) {
  let { error } = validateUserLogin(req.body);

  if (error) return res.status(400).send({ error: error.details[0].message });
  next();
}
module.exports = { validateUser, validatelogin };
