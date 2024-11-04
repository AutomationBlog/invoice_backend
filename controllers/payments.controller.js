import { createRozorpayInstance } from "../config/razorpay.config";

const razorpayInstance = createRozorpayInstance();

export const createRazorpayPayment = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

export const verifyRazorpayPayment = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    const secret = process.env.RAZORPAY_SECRET;
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id, "utf-8");
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === razorpay_signature) {
      res.status(200).json({
        success: true,
        msg: "Payment verified successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "Payment verification failed",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};
