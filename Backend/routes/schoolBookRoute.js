import express from "express";
import {
  addSchoolBook,
  listSchoolBook,
  removeSchoolBook,
} from "../controllers/schoolBookController.js";
import multer from "multer";

const schoolBookRouter = express.Router();

//Image storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

schoolBookRouter.post("/addschoolbook", upload.single("image"), addSchoolBook);
schoolBookRouter.get("/listschoolbook", listSchoolBook);
schoolBookRouter.post("/removeschoolbook", removeSchoolBook);

export default schoolBookRouter;
