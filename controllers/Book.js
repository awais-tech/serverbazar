const express = require("express");
const { CustomError } = require("../lib/error");
const { book } = require("../models/Book");

const getBooks = async (req, res, next) => {
  try {
    let Book = await book.find();
    if (!Book) {
      const error = new CustomError("not Book found", 400);
      next(error);
    }
    let datatosent = {
      message: "Book detail",
      Book,
    };
    return res.send(datatosent);
  } catch (e) {
    const error = new CustomError("fetching failed", 400);
    next(error);
  }
};
const createBooks = async (req, res, next) => {
  try {
    let Book = await new book(req.body);
    let c = await Book.save();
    return res.send(c);
  } catch (e) {
    const error = new CustomError("fetching failed", 400);
    next(error);
  }
};

module.exports = {
  getBooks,
  createBooks,
};
