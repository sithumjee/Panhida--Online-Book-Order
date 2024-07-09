import mongoose from "mongoose";

const pastPapersSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  grade: { type: String, required: true },
  part: { type: String, required: true },
});

const pastPapersModel =
  mongoose.models.pastPapers || mongoose.model("pastPapers", pastPapersSchema);

export default pastPapersModel;
