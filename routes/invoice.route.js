import express from "express";
import {
  getInvoices,
  createInvoice,
} from "../controllers/invoice.controller.js";

const InvoiceRouter = express.Router();

InvoiceRouter.get("/get-invoices", getInvoices);
InvoiceRouter.post("/create-invoice", createInvoice);

export default InvoiceRouter;
