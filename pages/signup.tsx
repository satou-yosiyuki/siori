import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser } from "../lib/firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await registerUser(email, password);
  };

  return (
    <div>
      <h1>会員登録</h1>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>登録</button>
    </div>
  );
}
