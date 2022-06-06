var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var Book = require("./routes/Book");
const database = require("./database/database");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

database();
app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/book", Book);
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res
    .status(error.code || 500)
    .send({ error: error.message || "An unknown error has occured" });
});
module.exports = app;
