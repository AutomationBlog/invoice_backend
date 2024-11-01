import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Timestamp,
    required: true,
    default: Timestamp.now,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "paid"],
    default: "pending",
  },
});

export const Invoice = mongoose.model("Invoice", invoiceSchema, "invoice");
