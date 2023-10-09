import React, { useState } from "react";
import styles from "./style.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Router from "next/router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * ログイン処理
   * @param e
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ログイがうまく行ったときプラン画面に遷移
    Router.push("/plan");
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
