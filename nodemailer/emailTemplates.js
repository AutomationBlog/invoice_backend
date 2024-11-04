import fs from "fs";
import path from "path";

export const VERIFICATION_EMAIL_TEMPLATE = fs
  .readFileSync(path.join("./VERIFICATION_EMAIL_TEMPLATE.html"))
  .toString();

export const VERIFICATION_EMAIL_SUCCESS_TEMPLATE = fs
  .readFileSync(path.join("./VERIFICATION_EMAIL_SUCCESS_TEMPLATE.html"))
  .toString();

export const PASSWORD_RESET_SUCCESS_TEMPLATE = fs
  .readFileSync(path.join("./PASSWORD_RESET_SUCCESS_TEMPLATE.html"))
  .toString();

export const PASSWORD_RESET_REQUEST_TEMPLATE = fs
  .readFileSync(path.join("./PASSWORD_RESET_REQUEST_TEMPLATE.html"))
  .toString();

export const PAYMENT_LINK_EMAIL_TEMPLATE = fs
  .readFileSync(path.join("./PAYMENT_LINK_EMAIL_TEMPLATE.html"))
  .toString();
