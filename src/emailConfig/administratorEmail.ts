import type { FormData } from "@/types";

export const generateAdministratorEmailData = ({
  name,
  tel,
  email,
  content,
  company,
}: FormData) => {
  return {
    from: `"【要確認】3Scode 事業サイト" <${process.env.SMTP_ADDRESS}>`,
    to: process.env.REPLY_TO_ADDRESS, // 送信先
    subject: `ホームページからお問い合わせがありました。`, // タイトル
    text: `
ホームページ(https://3s-code.com)
から問い合わせがありました。
問い合わせ内容は以下のとおりです。

———————————————————————
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
このメールは問い合わせフォームから送信されました。
`,
  };
};
