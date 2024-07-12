import pastPapersModel from "../models/pastPapersModel.js";

//add pastpaper

const addPastPaper = async (req, res) => {
  const pastPapers = new pastPapersModel({
    subject: req.body.subject,
    grade: req.body.grade,
    part: req.body.part,
  });

  try {
    await pastPapers.save();
    res.json({ success: true, message: "past paper Added Successfully" });
  } catch (error) {
    res.json({ success: false, message: "past paper not Added", error });
  }
};

//get past paper list

const listPastPapers = async (req, res) => {
  try {
    const pastPaper = await pastPapersModel.find({});
    res.json({ success: true, data: [pastPaper] });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove pastpapers

const removePastPapers = async (req, res) => {
  try {
    const pastPaper = await pastPapersModel.findById(req.body._id);
    await pastPapersModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "book Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export { addPastPaper, listPastPapers, removePastPapers };
