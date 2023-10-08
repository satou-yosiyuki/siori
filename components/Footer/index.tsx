import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>利用規約</p>
        <p>個人情報保護方針</p>
        <p>勧誘方針</p>
        <p>特定商取引法に基づく表記</p>
      </div>
    </footer>
  );
};

export default Footer;
