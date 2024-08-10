import Link from "next/link";
import type { FC } from "react";

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
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1>
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
