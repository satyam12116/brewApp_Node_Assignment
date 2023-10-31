const express = require("express");
const {
  addBook,
  getAllBooks,
  getBookByID,
  updateBook,
  deleteBook,
} = require("../controller/bookController");
const router = express.Router();

router.route("/api/books").post(addBook);
router.route("/api/books").get(getAllBooks);
router.route("/api/books/:id").get(getBookByID);
router.route("/api/books/:id").put(updateBook);
router.route("/api/books/:id").delete(deleteBook);

module.exports = router;