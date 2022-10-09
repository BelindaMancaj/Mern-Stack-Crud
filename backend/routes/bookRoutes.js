const express = require("express");
const router = express.Router();
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.route("/getbooks").get(getBooks);
router.route("/addBook").post(addBook);
router.route("/:bid").put(updateBook).delete(deleteBook);

module.exports = router;
