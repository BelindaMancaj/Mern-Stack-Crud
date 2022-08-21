const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    pages: {type: Number, required: true},
    price: {type: Number, required: true},
})


const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;