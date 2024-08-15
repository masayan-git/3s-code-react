import Link from "next/link";
import type { FC } from "react";

import styles from "./index.module.scss";

type Props = {
  href: string;
  text: string;
};

const MoreButton: FC<Props> = ({ href, text }) => {
  return (
    <Link className={styles.moreButton} href={href}>
      {text}
      <span></span>
    </Link>
  );
};

export default MoreButton;
