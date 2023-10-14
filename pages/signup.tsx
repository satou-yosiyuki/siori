import { FormEvent } from "react";
import Form from "../components/Common/Form";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { registerUser } from "../lib/firebase";

const SignUp: React.FC = () => {
  /**
   * 会員登録処理
   */
  const handleSignUp = async (
    event: FormEvent,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    await registerUser(email, password);
  };

  return (
    <div>
      <Header />
      <Form onSubmit={handleSignUp} text={"会員登録"} />
      <Footer />
    </div>
  );
};

export default SignUp;
