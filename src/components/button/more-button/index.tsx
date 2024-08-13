import Link from "next/link";

import styles from "./index.module.scss";

const MoreButton = () => {
  return (
    <Link className={styles.moreButton} href="/more">
      もっと見る<span></span>
    </Link>
  );
};

export default MoreButton;
