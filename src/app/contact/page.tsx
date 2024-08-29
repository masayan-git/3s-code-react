"use client";

import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

import ContactField from "@/components/contact/contactField";
import ContactForm from "@/layouts/contactForm";

import styles from "./index.module.scss";

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = () => {
    router.push("/contact/confirm");
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <p>3S codeにご関心をお持ちいただきまして、ありがとうございます。</p>
          <p>
            お見積りやサービスに関するお問い合わせ、ご相談はこちらから承っております。
          </p>
          <p>24時間以内に返答させていただきます。</p>
        </div>
        <ContactForm>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <ContactField
              label="会社名"
              name="company"
              register={register}
              errors={errors.company}
              placeholder="個人事業主の方は屋号をご入力ください。"
              options={{
                required: "必須項目です",
                minLength: {
                  value: 2,
                  message: "2文字以上で入力してください",
                },
                maxLength: {
                  value: 20,
                  message: "20文字以内で入力してください",
                },
              }}
            />
            <ContactField
              label="ご担当者名"
              name="name"
              register={register}
              errors={errors.name}
              placeholder="個人事業主の方は屋号をご入力ください。"
              options={{
                required: "必須項目です",
                minLength: {
                  value: 2,
                  message: "2文字以上で入力してください",
                },
                maxLength: {
                  value: 20,
                  message: "20文字以内で入力してください",
                },
              }}
            />
            <ContactField
              label="メールアドレス"
              name="email"
              type="text"
              register={register}
              errors={errors.email}
              placeholder="例）contact@3scode.co.jp"
              options={{
                required: "必須項目です",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "メールアドレスの形式で入力してください",
                },
                maxLength: {
                  value: 50,
                  message: "50文字以内で入力してください",
                },
              }}
            />
            <ContactField
              label="電話番号"
              name="tel"
              type="tel"
              register={register}
              errors={errors.tel}
              placeholder="例）080-1234-5678"
              options={{
                required: "必須項目です",
                pattern: {
                  value: /^\d{2,4}-?\d{2,4}-?\d{3,4}$/,
                  message: "電話番号の形式(半角数字)で入力してください",
                },
                maxLength: {
                  value: 50,
                  message: "50文字以内で入力してください",
                },
              }}
            />
            <ContactField
              label="ご相談内容"
              name="content"
              isTextarea={true}
              register={register}
              errors={errors.content}
              placeholder="お問い合わせやご相談内容をご入力ください。"
              options={{
                required: "必須項目です",
                maxLength: {
                  value: 5000,
                  message: "5000文字以内で入力してください",
                },
              }}
            />
            <div className={styles.buttonArea}>
              <button type="submit" className={styles.submitButton}>
                入力内容を確認する
              </button>
            </div>
          </form>
        </ContactForm>
      </div>
    </div>
  );
};

export default Contact;
