import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, msg: "Unauthorized - no token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, msg: "Unauthorized - invalid token" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error while verifying token", error);
    return res
      .status(500)
      .json({ success: false, msg: "Unauthorized - invalid token" });
  }
};
