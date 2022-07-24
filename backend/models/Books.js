const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    genre: {type: String, require: true},
    pages: {type: String, require: true},
    price: {type: String, require: true},
})

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel