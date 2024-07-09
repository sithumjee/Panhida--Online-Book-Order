import express from "express";
import {
  addPastPaper,
  listPastPapers,
  removePastPapers,
} from "../controllers/pastPapersContoller.js";

const pastPapersRouter = express.Router();

pastPapersRouter.post("/addPastPapers", addPastPaper);
pastPapersRouter.get("/listPastPapers", listPastPapers);
pastPapersRouter.post("/removePastPapers", removePastPapers);

export default pastPapersRouter;
