import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  invoiceId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
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
    enum: ["Open", "Link Sent", "Paid"],
    default: "Open",
  },
  paymentLinkToken: String,
  paymentLinkExpiresAt: Date,
});

export const Invoice = mongoose.model("Invoice", invoiceSchema, "invoice");
