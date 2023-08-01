const express = require('express');
const router = express.Router();
const db = require('../db');
const middleware = require('../middleware');
const Book = require('../models/book');

// Add new book
router.post('/add', async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
      res.status(500).json({ message: 'Error adding book', error: error.message });
    }
  });

  //Get all books
  router.get('/', async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(201).json({ message: 'Book fetched successfully', book: allBooks });
    } catch (error) {
      res.status(500).json({ message: 'Error getting books', error: error.message });
    }
  });

  module.exports = router;