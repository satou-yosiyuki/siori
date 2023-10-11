import React, { useState } from "react";
import styles from "./style.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { loginUser } from "../lib/firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /**
   * ログイン処理
   * @param e
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ログイがうまく行ったときプラン画面に遷移
    await loginUser(email, password);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">ログイン</button>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default Login;
