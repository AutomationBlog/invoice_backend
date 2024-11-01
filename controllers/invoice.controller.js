import invoiceModel from "../models/invoice.model";

export const createInvoice = async (req, res) => {
  const { name, email, amount } = req.body;
  try {
    if (!name || !email || !amount) {
      throw new Error("All fields are required");
    }
    const newInvoice = new invoiceModel({
      name,
      email,
      amount,
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
    const invoices = await invoiceModel.find();
    res.status(200).json({ success: true, data: invoices });
  } catch (error) {
    console.log("Error while getting invoices", error);
    res.status(400).json({ success: false, msg: error.message });
  }
};
