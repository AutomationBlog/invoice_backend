import express from "express";
import {
  getInvoices,
  createInvoice,
  SendPaymentLink,
  getUserInvoices,
  deleteInvoice,
  updateInvoicePayment,
} from "../controllers/invoice.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyUserToken } from "../middleware/verifyUserToken.js";

const InvoiceRouter = express.Router();

InvoiceRouter.get("/get-invoices", verifyToken, getInvoices);
InvoiceRouter.get("/get-invoice/:invoiceId", verifyUserToken, getUserInvoices);
InvoiceRouter.post("/create-invoice", verifyToken, createInvoice);
InvoiceRouter.post("/send-payment-link", verifyToken, SendPaymentLink);
InvoiceRouter.delete("/delete-invoice/:invoiceId", verifyToken, deleteInvoice);
InvoiceRouter.patch("/update-payment/:invoiceId", updateInvoicePayment);

export default InvoiceRouter;
