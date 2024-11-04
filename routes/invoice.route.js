import express from "express";
import {
  getInvoices,
  createInvoice,
  SendPaymentLink,
} from "../controllers/invoice.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const InvoiceRouter = express.Router();

InvoiceRouter.get("/get-invoices", verifyToken, getInvoices);
InvoiceRouter.post("/create-invoice", verifyToken, createInvoice);
InvoiceRouter.post("/send-payment-link", verifyToken, SendPaymentLink);

export default InvoiceRouter;
