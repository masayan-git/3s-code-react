import type { FC } from "react";

import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
}

const ContactForm: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default ContactForm;
