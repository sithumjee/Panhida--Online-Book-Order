import schoolBookModel from "../models/schoolBookModel.js";
import fs from "fs";

//add SchoolBook item

const addSchoolBook = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const SchoolBook = new schoolBookModel({
    part: req.body.part,
    grade: req.body.grade,
    subject: req.body.subject,
    image: image_filename,
  });

  try {
    await SchoolBook.save();
    res.json({ success: true, message: "SchoolBook Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all SchoolBook list

const listSchoolBook = async (req, res) => {
  try {
    const SchoolBooks = await schoolBookModel.find({});
    res.json({ success: true, data: SchoolBooks });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove SchoolBook item

const removeSchoolBook = async (req, res) => {
  try {
    const SchoolBook = await schoolBookModel.findById(req.body._id);
    fs.unlink(`../uploads/${SchoolBook.image}`, () => {});

    await schoolBookModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "SchoolBook Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export { addSchoolBook, listSchoolBook, removeSchoolBook };
