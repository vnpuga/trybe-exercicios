const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async(id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async ({ title, author, pageQuantity}) => {
  const newBook = await Book.create({title, author, pageQuantity});
  return newBook;
};

const update = async (id, {title, author, pageQuantity}) => {
  const [updateBook] = await Book.update(
    {title, author, pageQuantity},
    {where: {id}},
  )
  console.log(updateBook);
  return update;
};

const remove = async (id) => {
  const deleteBook = await Book.destroy({where: {id}});
 return deleteBook;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};