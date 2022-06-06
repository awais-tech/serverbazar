var express = require("express");
var router = express.Router();

const { validatelogin } = require("../middleware/validateuser");
const { getBooks, createBooks } = require("../controllers/Book");
router.get("/", getBooks);
router.post("/", createBooks);

module.exports = router;
