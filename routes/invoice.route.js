import express from "express";
import {
  getInvoices,
  createInvoice,
} from "../controllers/invoice.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const InvoiceRouter = express.Router();

InvoiceRouter.get("/get-invoices", verifyToken, getInvoices);
InvoiceRouter.post("/create-invoice", verifyToken, createInvoice);

export default InvoiceRouter;
