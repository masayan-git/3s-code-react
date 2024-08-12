import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";

const TopService = () => {
  const cards = [
    {
      title: "コーディング",
      content: {
        __html:
          "HTML CSS JavaScriptを使用し、デザインカンプからのコーディングを行います。「予測しやすい」「再利用しやすい」「保守しやすい」「拡張しやすい」CSS設計を意識しメンテナンスしやすいコーディングを心がけております。",
      },
    },
    {
      title: "WordPress",
      content: {
        __html:
          "カスタム投稿、カスタムフィールド、フォームの実装可能です。<br />クライアント様が利用しやすいよう配慮し実装致します。実装方法のご指示がない場合は私からご提案させて頂きます。",
      },
    },
    {
      title: "機能追加・修正作業",
      content: {
        __html:
          "機能追加・サイトの画像差し替え・レイアウト調整などの作業を行います。<br />どんな小さな作業でも承りますので、お気軽にお問い合わせください。",
      },
    },
  ];
  return (
    <div className={styles.topService}>
      <div className={styles.inner}>
        <SectionTitle titleEn="SERVICE" titleJa="サービス" theme="light" />
        <div className={styles.cards}>
          {cards.map((card, index) => {
            return (
              <div key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>
                  <span className={styles.cardTitleLabel}>
                    SERVICE / 0{index + 1}
                  </span>
                  <span className={styles.cardTitleText}>{card.title}</span>
                </h3>
                <div>
                  <p
                    className={styles.cardText}
                    dangerouslySetInnerHTML={card.content}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopService;
