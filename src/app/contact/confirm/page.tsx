"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import LoadingButton from "@/components/button/loadingButton";
import ContactField from "@/components/contact/contactField";
import ContactForm from "@/layouts/contactForm";

import styles from "./index.module.scss";

const Confirm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getValues } = useFormContext();
  const formData = getValues();
  const router = useRouter();

  const handleGTMEvent = () => {
    sendGTMEvent({ event: "contact", value: "submit" });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const url = "/api/contact";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        handleGTMEvent();
        router.push("/contact/complete");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        throw new Error("サーバーエラーが発生しました。", {
          cause: {
            status: response.status,
            statusText: response.statusText,
          },
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        if (
          error.cause &&
          typeof error.cause === "object" &&
          "status" in error.cause &&
          "statusText" in error.cause
        ) {
          switch (error.cause.status) {
            case 404:
              alert(
                `
                ${error.cause.status}: ${error.cause.statusText}
                リクエストされたリソースが見つかりません。
              `.replace(/^\s+/gm, "")
              );
              break;
            case 500:
              alert(
                `
                ${error.cause.status}: ${error.cause.statusText}
                サーバーエラーが発生しました。
                再度お試しいただくか、しばらく時間をおいてからお試しください。
              `.replace(/^\s+/gm, "")
              );
              break;
            default:
              alert(
                `
                ネットワークエラーが発生しました。
                再度お試しいただくか、しばらく時間をおいてからお試しください。
              `.replace(/^\s+/gm, "")
              );
              break;
          }
        }
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // formData が空かどうかを確認し、空なら /contact にリダイレクト
    if (!formData || Object.keys(formData).length === 0) {
      router.push("/contact");
    }
  }, [formData, router]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <p>以下の内容で送信します。</p>
          <p>内容をご確認いただき、よろしければ送信ボタンを押してください。</p>
        </div>
        <ContactForm>
          <ContactField
            label="会社名"
            name="company"
            value={formData.company}
          />
          <ContactField label="ご担当者名" name="name" value={formData.name} />
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
            <Link
              href="/contact"
              data-loading={isLoading}
              className={styles.returnButton}
            >
              入力画面に戻る
            </Link>
            <LoadingButton
              onClick={onSubmit}
              isLoading={isLoading}
              text="送信する"
            />
          </div>
        </ContactForm>
      </div>
    </div>
  );
};

export default Confirm;
