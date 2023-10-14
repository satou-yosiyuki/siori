import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { logoutUser } from "../../lib/firebase";
import { AuthContext } from "../../auth/AuthProvider";

const Header = () => {
  const { signInCheck } = React.useContext(AuthContext);
  return (
    <div className={styles.header}>
      <Link href={"/"} className={styles.title}>
        しおり
      </Link>
      <div>
        {signInCheck ? (
          <Link className={styles.link} href="/" onClick={() => logoutUser()}>
            ログアウト
          </Link>
        ) : (
          <>
            <Link className={styles.link} href="/login">
              ログイン
            </Link>
            <Link className={styles.link} href="/signup">
              会員登録
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
