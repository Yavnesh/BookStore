const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const PORT = process.env.PORT || 5000;

// Start a server on port 5000
app.listen(PORT,()=> console.log(`server is running on port ${PORT}`));

// Parse JSON bodies for incoming requests
app.use(express.json());

// Set up routes
app.use('/user', userRoutes);
app.use('/book', bookRoutes);

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});
