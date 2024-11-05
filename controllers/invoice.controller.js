import { Invoice } from "../models/invoice.model.js";
import { sendPaymentEmail } from "../nodemailer/emails.js";
import { generateToken } from "../utils/generateTokenAndSetCookie.js";

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
      res.status(400).json({ success: false, msg: "Invoice not found" });
    } else if (invoice.userId !== req.userId) {
      res.status(400).json({ success: false, msg: "Unauthorized access" });
    } else if (invoice.isPaid) {
      res.status(400).json({ success: false, msg: "Invoice already paid" });
    }
    const token = generateToken(invoice.invoiceId, "5mins");
    await sendPaymentEmail(invoice, token);
    await Invoice.updateOne(
      { invoiceId: invoice.invoiceId },
      {
        $set: {
          status: "Link Sent",
          paymentLinkToken: `${token}`,
          paymentLinkExpiresAt: new Date(Date.now() + 5 * 60 * 1000),
        },
      }
    );
    res.status(200).json({
      success: true,
      msg: "Payment link sent successfully",
    });
  } catch (error) {
    console.log("Error while sending payment link", error);
    res.status(400).json({ success: false, msg: error.message });
  }
};
