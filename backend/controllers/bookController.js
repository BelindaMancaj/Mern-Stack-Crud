const express = require("express");
const mongoose = require("mongoose");
const BookModel = require("../models/Books");

const getBooks = async (req, res) => {
  BookModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const addBook = async (req, res, next) => {
  const book = req.body;
  const newBook = new BookModel(book);
  try {
    await newBook.save();
  } catch (err) {
    const error = new Error("Adding a new book failed!");
    return next(error);
  }

  res.json(book);
};

const deleteBook = async (req, res, next) => {
  const bookId = req.params.bid;
  let book;
  try {
    book = await BookModel.findById(bookId);
  } catch (err) {
    const error = new Error("Could not find book");
    return next(error);
  }

  try {
    await book.remove();
  } catch (err) {
    const error = new Error("Could not delete book");
    return next(error);
  }
  res.status(200).json({ message: "Book was deleted!" });
};

const updateBook = async (req, res, next) => {
  const bookId = req.params.bid;
  let { title, author, genre, pages, price } = req.body;
  let bookToBeChanged;

  try {
    bookToBeChanged = await BookModel.findById(bookId);
  } catch (err) {
    const error = new Error("Something went wrong, could not find book");
    return next(error);
  }

  bookToBeChanged.title = title;
  bookToBeChanged.author = author;
  bookToBeChanged.genre = genre;
  bookToBeChanged.pages = pages;
  bookToBeChanged.price = price;

  try {
    await bookToBeChanged.save();
  } catch (err) {
    const error = new Error("Could not save changes!");
    return next(error);
  }
  res.json(200).json(bookToBeChanged);
};

module.exports = {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
};
