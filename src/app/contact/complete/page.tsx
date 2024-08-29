"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import MoreButton from "@/components/button/moreButton";

import styles from "./index.module.scss";

const Complete = () => {
  const { reset } = useFormContext();
  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <strong className={styles.mainText}>送信が完了しました。</strong>
        <p className={styles.text}>
          お問い合わせいただきましてありがとうございます。
          <br />
          24時間以内にご連絡をいたしますので、今しばらくお待ちくださいませ。
        </p>
        <div className={styles.buttonArea}>
          <MoreButton href="/" text="TOPへ戻る" />
        </div>
      </div>
    </div>
  );
};

export default Complete;
