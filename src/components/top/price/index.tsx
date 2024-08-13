import SectionTitle from "../sectionTitle";
import styles from "./index.module.scss";

const TopPrice = () => {
  const priceList = [
    {
      content: "コーディング(トップ)",
      price: "50,000円",
    },
    {
      content: "コーディング(下層)",
      price: "20,000円",
    },
    {
      content: "コーディング(LP)",
      price: "60,000円",
    },
    {
      content: "コーディング + WordPress構築",
      price: "160,000円",
    },
    {
      content: "WordPress構築",
      price: "120,000円",
    },
  ];
  return (
    <div className={styles.topPrice}>
      <div className={styles.bgInner}>
        <div className={styles.inner}>
          <SectionTitle titleEn="PRICE" titleJa="料金" theme="light" />
          <div className={styles.contents}>
            <ul className={styles.lists}>
              {priceList.map((list, index) => (
                <li key={index} className={styles.list}>
                  <div className={styles.content}>{list.content}</div>
                  <div className={styles.price}>{list.price}〜</div>
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              ※内容や量によって、価格が変動いたします。デザイン料は含まれておりません。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPrice;
