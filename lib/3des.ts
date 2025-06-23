import crypto from "crypto";

const key = Buffer.from(process.env.NEXT_PUBLIC_DES_KEY!, "utf8");
const iv = Buffer.from(process.env.NEXT_PUBLIC_DES_IV!, "utf8");

export function encrypt3DES(data: string): string {
  const cipher = crypto.createCipheriv("des-ede3-cbc", key, iv);
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

export function decrypt3DES(encrypted: string): string {
  const decipher = crypto.createDecipheriv("des-ede3-cbc", key, iv);
  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
