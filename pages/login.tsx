import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/Login";
import Form from "../components/Common/Form";
import { loginUser } from "../lib/firebase";

const Login: React.FC = () => {
  /**
   * ログイン処理
   */
  const handleSubmit = async (email: string, password: string) => {
    // ログイがうまく行ったときプラン画面に遷移
    await loginUser(email, password);
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit} text={"ログイン"} />
      <Footer />
    </>
  );
};

export default Login;
