const express = require('express');
const BooksController = require('../controllers/BooksController');

const router = express.Router();

router.get('/:id', BooksController.getById);

router.get('/', BooksController.getAll);

router.post('/', BooksController.create);

router.put('/:id', BooksController.update);

router.delete('/:id', BooksController.remove);

module.exports = router; 