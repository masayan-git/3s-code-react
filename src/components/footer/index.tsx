import Link from "next/link";

import { menuData } from "@/data/menuData";

import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>
            <Link href="/" className={styles.titleLink}>
              3S code
            </Link>
          </h2>
          <nav>
            <ul className={styles.navLists}>
              {menuData.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.copyArea}>
          <small className={styles.copy}>
            ©︎ 3S code All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
