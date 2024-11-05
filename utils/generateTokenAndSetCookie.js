import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // res.cookie("token", token, {
  //   httpOnly: true,
  //   sameSite: "strict",
  //   secure: true,
  //   maxAge: 7 * 24 * 60 * 60 * 1000,
  // });
  return token;
};

export const generateToken = (value, date) => {
  const token = jwt.sign({ value }, process.env.JWT_SECRET, {
    expiresIn: date,
  });
  return token;
};
