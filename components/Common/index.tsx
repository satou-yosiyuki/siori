import React, { FormEventHandler } from "react";
import styles from "./style.module.scss";

interface FormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  text: string;
}

const Form: React.FC<FormProps> = (props) => {
  const { onSubmit, text } = props;

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <div>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={() => onSubmit(email, password)}
        >
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
          <button type="submit">{text}</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
