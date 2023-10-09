import React from "react";
import styles from "./style.module.scss";

const PlanContent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>沖縄</div>
        <div className={styles.column}>北海道</div>
        <div className={styles.column}>韓国</div>
        <div className={styles.column}>福岡</div>
      </div>
      <div className={styles.bookmark}>
        <a href="#" className={styles.bookmarkIcon}>
          +
        </a>
        <span className={styles.bookmarkText}>しおりを作成</span>
      </div>
    </>
  );
};

export default PlanContent;
