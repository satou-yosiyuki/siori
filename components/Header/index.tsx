import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>しおり</div>
      <Link className={styles.link} href="/login">
        ログイン
      </Link>
    </div>
  );
};

export default Header;
