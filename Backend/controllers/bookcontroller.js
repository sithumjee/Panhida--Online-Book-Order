import bookModel from "../models/bookModel.js";
import fs from "fs";

//add food item

const addBook = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const book = new bookModel({
    name: req.body.name,
    authorName: req.body.authorName,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await book.save();
    res.json({ success: true, message: "book Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all book list

const listBook = async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.json({ success: true, data: books });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove book item

const removeBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.body._id);
    fs.unlink(`../uploads/${book.image}`, () => {});

    await bookModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "book Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export { addBook, listBook, removeBook };
