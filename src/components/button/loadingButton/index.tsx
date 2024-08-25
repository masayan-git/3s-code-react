import type { FC } from "react";

import styles from "./index.module.scss";

interface LoadingButtonProps {
  isLoading: boolean;
  text: string;
  onClick: () => void;
}

const LoadingButton: FC<LoadingButtonProps> = ({
  isLoading,
  text,
  onClick,
}) => {
  return (
    <button
      data-loading={isLoading}
      disabled={isLoading}
      className={styles.container}
      type="button"
      onClick={onClick}
    >
      {isLoading ? (
        <span className={styles.loadingCircle}></span>
      ) : (
        <span className={styles.text}>{text}</span>
      )}
    </button>
  );
};

export default LoadingButton;
