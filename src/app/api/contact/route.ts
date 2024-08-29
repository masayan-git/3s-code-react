import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { generateAdministratorEmailData } from "@/emailConfig/administratorEmail";
import { generateAutoReplyMailData } from "@/emailConfig/autoReplyEmail";
import type { FormData } from "@/types";

export async function POST(req: Request) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const data: FormData = await req.json();

    const autoReplyMailData = generateAutoReplyMailData(data);
    const administratorMailData = generateAdministratorEmailData(data);

    await Promise.all([
      transporter.sendMail(autoReplyMailData),
      transporter.sendMail(administratorMailData),
    ]);

    return NextResponse.json(
      { message: "送信に成功しました。" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "メール送信に失敗しました。", error },
      { status: 500 }
    );
  }
}
