import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

//=================app config========================

const app = express();
const port = 4000;

//==================middelware========================

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

//==========================database connection======================\

connectDB();
