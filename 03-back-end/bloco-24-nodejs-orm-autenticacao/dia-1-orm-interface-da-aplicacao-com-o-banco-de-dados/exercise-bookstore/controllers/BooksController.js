const BookService = require('../services/BooksService');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    return error
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (!book) {
      return res.status(404).json({ "message": "Book not found" })
    }
    return res.status(200).json(book);
  } catch (error) {
    return error
  }
};

const create = async (req, res) => {
  try {
    const list = req.body;
    const newBook = await BookService.create(list);
    return res.send(201).json(newBook);
  } catch (error) {
    return error
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updateBook = await BookService.update(id, { title, author, pageQuantity });
    if (!updateBook){
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(201).json({ message: 'Book updated' });
  } catch (error) {
    return error
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removeBook = await BookService.remove(id);
    if (!removeBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book removed' });    
  } catch (error) {
    return error
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}