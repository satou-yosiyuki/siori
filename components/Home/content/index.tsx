import React from "react";
import styles from "./style.module.scss";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {" "}
        <h1 className={styles.title}>旅のしおりを作成</h1>
        <p className={styles.subtext}>
          旅先での思い出を記録しよう。あなたの冒険を共有しましょう。
        </p>
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>テスト</div>
        <div className={styles.column}>追加機能作成中</div>
        <div className={styles.column}>追加機能作成中</div>
      </div>
    </div>
  );
};

export default Content;
