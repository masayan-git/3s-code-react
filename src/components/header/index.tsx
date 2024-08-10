import Link from "next/link";
import { type FC, useState } from "react";

import styles from "./index.module.scss";

const navItems = [
  {
    label: "3S codeについて",
    href: "/",
  },
  {
    label: "サービス",
    href: "/",
  },
  {
    label: "制作実績",
    href: "/",
  },
  {
    label: "料金",
    href: "/",
  },
  {
    label: "ブログ",
    href: "/",
  },
  {
    label: "お問い合わせ",
    href: "/",
  },
];

const Header: FC = () => {
  const [active, setActive] = useState(false);

  const handleMenuOpen = () => {
    setActive(!active);
  };

  return (
    <header data-active={active || undefined} className={styles.header}>
      <button onClick={handleMenuOpen} className={styles.button}>
        <span className={styles.buttonLine}></span>
        <span className={styles.buttonLine}></span>
        <span className={styles.buttonLine}></span>
      </button>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <Link href="/" className={styles.titleLink}>
            3S code
          </Link>
        </h1>
        <nav>
          <ul className={styles.navLists}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  data-contact-button={
                    item.label === "お問い合わせ" || undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
