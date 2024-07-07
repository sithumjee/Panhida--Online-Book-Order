import mongoose from "mongoose";

const schoolBookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  grade: { type: String, required: true },
  subject: { type: String, required: true },
  image: { type: String, required: true },
});

const schoolBookModel =
  mongoose.models.schoolBooks ||
  mongoose.model("schoolBooks", schoolBookSchema);

export default schoolBookModel;
