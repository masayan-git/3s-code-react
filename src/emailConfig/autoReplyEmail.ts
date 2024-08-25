import type { FormData } from "@/types";

export const generateAutoReplyMailData = ({
  name,
  tel,
  email,
  content,
  company,
}: FormData) => {
  return {
    from: `"3Scode 代表 庄司 雅幸" <${process.env.SMTP_ADDRESS}>`,
    to: email, // 送信先
    subject: `お問い合わせありがとうございます。`, // タイトル
    text: `
※このメールはシステムからの自動返信です

${company}
${name}様

お世話になっております。
お問い合わせありがとうございました。

以下の内容でお問い合わせを受け付けいたしました。
24時間以内にご連絡いたします。

今しばらくお待ちくださいませ。

【会社名】
${company}

【ご担当者名】
${name}

【メールアドレス】
${email}

【電話番号】
${tel}

【ご相談内容】
${content}

———————————————————————
3S code 代表 庄司 雅幸

メール：info@3s-code.jp
———————————————————————
`,
  };
};
