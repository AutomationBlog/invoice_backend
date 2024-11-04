import razorpay from "razorpay";

const createRozorpayInstance = () => {
  return new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

export { createRozorpayInstance };