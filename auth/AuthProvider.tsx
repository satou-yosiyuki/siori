import firebase from "firebase/app";
import { createContext, useEffect, useState, VFC, ReactNode } from "react";
import { User } from "firebase/auth";
import { auth } from "../lib/firebase";
import Loading from "../components/Loading";

// export type User = firebase.User;

type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  const [signInCheck, setSignInCheck] = useState(false);

  // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setSignInCheck(true);
      } else {
        setSignInCheck(true);
      }
    });
  });

  if (signInCheck) {
    return (
      <AuthContext.Provider value={{ currentUser, signInCheck }}>
        {children}
      </AuthContext.Provider>
    );
  } else {
    // ログイン確認中
    return <Loading />;
  }
};

export { AuthContext, AuthProvider };
