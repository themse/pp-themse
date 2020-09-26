import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, githubAuthProvider } from './firebase';

const AuthContext = createContext({});

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

function useAuthProvider() {
  const [user, setUser] = useState(null);

  const signInWithGithub = () => {
    return auth.signInWithPopup(githubAuthProvider).then((response) => {
      //@ts-ignore
      setUser(response.user);
      return response.user;
    });
  };

  const signOut = () => {
    return auth.signOut().then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        //@ts-ignore
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut,
  };
}
