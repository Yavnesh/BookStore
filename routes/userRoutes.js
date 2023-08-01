const express = require('express');
const router = express.Router();
const db = require('../db');
const config = require('../config');
const jwt = require('jsonwebtoken');
const middleware = require('../middleware');
const User = require('../models/user');

// Register new user
router.post('/register', async (req, res) => {
    try {
      // Your registration logic here (create a new user and save to the database)
      const newUser = await User.create(req.body);
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  });
  
  // User login
  router.post('/login', async (req, res) => {
    try {
      // Your login logic here (check credentials, generate JWT token)
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user._id }, config.key, { expiresIn: '24h' });
      res.status(201).json({ message: 'Login successful', token: token });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error: error.message });
    }
  });
  
  // Refresh JWT token (optional, if needed)
  router.post('/refresh-token', async (req, res) => {
    try {
      // Your token refresh logic here (if required)
      // For example, check the validity of the old token and generate a new token
      // const oldToken = req.header('Authorization');
      // ... Token refresh code ...
  
      res.status(201).json({ message: 'Token refreshed successfully', token: newToken });
    } catch (error) {
      res.status(500).json({ message: 'Error refreshing token', error: error.message });
    }
  });

  // Secure route: Get user profile
  router.get('/profile', middleware.checkToken, async (req, res) => {
        try {
        // Your secure route logic here (fetch user profile data from the database)
        const user = await User.findById(req.user.id);
        res.json({ message: 'User profile retrieved successfully', user });
        } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error: error.message });
        }
    });
  
    // Secure route: Get user library
    // router.get('/api/library', middleware.checkToken, async (req, res) => {
    //     try {
    //     // Your secure route logic here (fetch user's library data from the database)
    //     const userLibrary = await db.UserLibrary.find({ user_id: req.user.id });
    //     res.json({ message: 'User library retrieved successfully', userLibrary });
    //     } catch (error) {
    //     res.status(500).json({ message: 'Error fetching user library', error: error.message });
    //     }
    // });


// Update a user by ID
router.put('/update/:id', middleware.checkToken, async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Delete a user by ID
  router.delete('/delete/:id', middleware.checkToken, async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndRemove(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
