import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./dbUtils/connectDB.js";
import invoiceRoutes from "./routes/invoice.route.js";
import authRoutes from "./routes/auth.route.js";
import PaymentRoutes from "./routes/payment.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//Home Page Route
app.get("/", (req, res) => {
  res.json({ message: "Invoice Backend API" });
});

//Routes
app.use("/api/invoice", invoiceRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payment", PaymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
