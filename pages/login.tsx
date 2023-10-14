import React, { FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Common/Form";
import { auth, loginUser } from "../lib/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "../auth/AuthProvider";

const Login: React.FC = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  React.useEffect(() => {
    if (user) {
      // ログイン成功時の遷移
      router.push("/plan");
    }
  }, [user, router]);
  /**
   * ログイン処理
   */
  const handleSubmit = async (
    event: FormEvent,
    email: string,
    password: string
  ) => {
    event.preventDefault();
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
