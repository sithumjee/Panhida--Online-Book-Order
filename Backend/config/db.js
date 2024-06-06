import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sithumjeevantha:62664719@cluster0.7ueqs8u.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB connected"));
};
