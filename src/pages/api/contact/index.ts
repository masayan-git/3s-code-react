import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { generateAdministratorEmailData } from "@/emailConfig/administratorEmail";
import { generateAutoReplyMailData } from "@/emailConfig/autoReplyEmail";
import type { FormData } from "@/types";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const data: FormData = req.body;

  const autoReplyMailData = generateAutoReplyMailData(data);
  const administratorMailData = generateAdministratorEmailData(data);

  try {
    await Promise.all([
      transporter.sendMail(autoReplyMailData),
      transporter.sendMail(administratorMailData),
    ]);
    res.status(200).json({ message: "送信に成功しました。" });
  } catch (error) {
    res.status(500).json({ message: "メール送信に失敗しました。", error });
  }
}
