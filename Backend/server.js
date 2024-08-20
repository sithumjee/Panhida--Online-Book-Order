import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import bookRouter from "./routes/bookRoutes.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRouter.js";
import schoolBookRouter from "./routes/schoolBookRoute.js";
import pastPapersRouter from "./routes/pastPapersRoute.js";

//=================app config========================

const app = express();
const port = process.env.PORT || 4000;

//==================middelware========================

app.use(express.json());
app.use(cors());

//==========================database connection======================\

connectDB();

//==============================API endpoints=========================

app.use("/api/book", bookRouter);
app.use("/api/schoolbooks", schoolBookRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/pastpapers", pastPapersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
