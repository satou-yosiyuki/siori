import React from "react";
import styles from "./style.module.scss"; // Sass Moduleのスタイルをインポート

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
