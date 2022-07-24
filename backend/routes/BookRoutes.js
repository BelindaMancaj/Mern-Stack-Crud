const express = require("express");
const router = express.Router();
const bookContollers = require("../controllers/BookController");

router.get("/getbooks", bookContollers.getBooks);
router.post("/addbooks", bookContollers.addBook);
router.patch("/:bid", bookContollers.updateBook);
router.delete("/:bid", bookContollers.deleteBook);

module.exports = router;