import type { FC } from "react";

import styles from "./index.module.scss";

type Props = {
  category: string;
};

const CategoryLabel: FC<Props> = ({ category }) => {
  return <span className={styles.label}>{category}</span>;
};

export default CategoryLabel;
