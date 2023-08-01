const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  cover_image_url: { type: String, required: true },
  genre: { type: String },
  published_date: { type: Date, required: true },
  price: {type: Number, required: true},
}, { timestamps: true });

// Virtual for book's URL
bookSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/book/${this._id}`;
});

const Book = mongoose.model("Book", bookSchema)

// Export model
module.exports = Book;