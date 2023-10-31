const Book = require('../model/book')
const addBook = async(req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(200).json(savedBook);
      } catch (err) {
        res.status(500).json({ error:  err.message});
      }
};
const getAllBooks = async(req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
};
const getBookByID = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ error:  err.message });
    } else {
      res.status(200).json(book);
    }
};
const updateBook=async(req,res)=>{
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBook);
      } catch (err) {
        res.status(500).json({ error:  err.message});
      }
}
const deleteBook=async(req,res)=>{
    try {
        await Book.findByIdAndRemove(req.params.id);
        res.status(200).json({msg:'book deleted successfully'}).end();
      } catch (err) {
        res.status(500).json({ error:  err.message });
      }
}

module.exports = {addBook, getAllBooks, getBookByID,updateBook,deleteBook};
