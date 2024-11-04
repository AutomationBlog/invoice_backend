import { Invoice } from "../models/invoice.model.js";

export const createInvoice = async (req, res) => {
  const { name, email, amount } = req.body;
  try {
    if (!name || !email || !amount) {
      throw new Error("All fields are required");
    }
    const invoiceID = Math.floor(Math.random() * 1000000) + 1 * Date.now();
    const newInvoice = new Invoice({
      name,
      email,
      amount,
      invoiceId: invoiceID,
      userId: req.userId,
    });
    await newInvoice.save();
    res.status(201).json({
      success: true,
      msg: "Invoice created successfully",
    });
  } catch (error) {
    console.log("Error while creating invoice", error);
    res.status(400).json({ success: false, msg: error.message });
  }
};

export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ userId: req.userId });
    res.status(200).json({ success: true, invoices: invoices });
  } catch (error) {
    console.log("Error while getting invoices", error);
    res.status(400).json({ success: false, msg: error.message });
  }
};

export const SendPaymentLink = async (req, res) => {
  const { invoiceId } = req.body;

  try {
    const invoice = await Invoice.findOne({ invoiceId });
    if (!invoice) {
      throw new Error("Invoice not found");
    } else if (invoice.userId !== req.userId) {
      throw new Error("Unauthorized access");
    } else if (invoice.isPaid) {
      throw new Error("Invoice already paid");
    }
    await sendPaymentLink(invoice, res);
  } catch (error) {
    console.log("Error while sending payment link", error);
    res.status(400).json({ success: false, msg: error.message });
  }
};
