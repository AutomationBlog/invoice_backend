import express from "express";
import {
  createRazorpayPayment,
  verifyRazorpayPayment,
} from "../controllers/payments.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const PaymentRouter = express.Router();

PaymentRouter.post("/create-payment", createRazorpayPayment);
PaymentRouter.post("/verify-payment", verifyRazorpayPayment);

export default PaymentRouter;
