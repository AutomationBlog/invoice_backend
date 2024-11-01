import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./dbUtils/connectDB.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Home Page Route
app.get("/", (req, res) => {
  res.json({ message: "Invoice Backend API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
