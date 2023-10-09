import React, { useState } from "react";
import styles from "./style.module.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * ログイン処理
   * @param e
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
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
    </div>
  );
};

export default Login;
