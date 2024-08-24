import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import ContactField from "@/components/contact/contactField";
import ContactLayout from "@/layouts/contact";
import ContactForm from "@/layouts/contactForm";

import styles from "./index.module.scss";

const Confirm = () => {
  const { getValues } = useFormContext();
  const formData = getValues();
  const router = useRouter();

  useEffect(() => {
    // formData が空かどうかを確認し、空なら /contact にリダイレクト
    if (!formData || Object.keys(formData).length === 0) {
      router.push("/contact");
    }
  }, [formData, router]);

  return (
    <ContactLayout page="お問い合わせ" description="お問い合わせページです。">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <p>以下の内容で送信します。</p>
            <p>
              内容をご確認いただき、よろしければ送信ボタンを押してください。
            </p>
          </div>
          <ContactForm>
            <ContactField
              label="会社名"
              name="company"
              value={formData.company}
            />
            <ContactField
              label="ご担当者名"
              name="name"
              value={formData.name}
            />
            <ContactField
              label="メールアドレス"
              name="email"
              value={formData.email}
            />
            <ContactField label="電話番号" name="tel" value={formData.tel} />
            <ContactField
              label="ご相談内容"
              name="content"
              value={formData.content}
            />
            <div className={styles.buttonArea}>
              <Link href="/contact" className={styles.returnButton}>
                入力画面に戻る
              </Link>
              <button type="submit" className={styles.submitButton}>
                送信する
              </button>
            </div>
          </ContactForm>
        </div>
      </div>
    </ContactLayout>
  );
};

export default Confirm;
