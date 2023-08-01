const mongoose = require("mongoose");

const url = "mongodb+srv://yavneshsharma:admin123@cluster0.v69tucz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});