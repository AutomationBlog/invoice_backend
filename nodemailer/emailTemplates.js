import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const VERIFICATION_EMAIL_TEMPLATE = fs
  .readFileSync(path.join(__dirname, "VERIFICATION_EMAIL_TEMPLATE.html"))
  .toString();

export const VERIFICATION_EMAIL_SUCCESS_TEMPLATE = fs
  .readFileSync(
    path.join(__dirname, "VERIFICATION_EMAIL_SUCCESS_TEMPLATE.html")
  )
  .toString();

export const PASSWORD_RESET_SUCCESS_TEMPLATE = fs
  .readFileSync(path.join(__dirname, "PASSWORD_RESET_SUCCESS_TEMPLATE.html"))
  .toString();

export const PASSWORD_RESET_REQUEST_TEMPLATE = fs
  .readFileSync(path.join(__dirname, "PASSWORD_RESET_REQUEST_TEMPLATE.html"))
  .toString();

export const PAYMENT_LINK_EMAIL_TEMPLATE = fs
  .readFileSync(path.join(__dirname, "PAYMENT_LINK_EMAIL_TEMPLATE.html"))
  .toString();
