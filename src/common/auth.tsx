import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, githubAuthProvider, IUserFirebase } from './firebase';
import { createUser } from './firestore';
import { IAuth, IUser } from './types';

const AuthContext = createContext({});

export const AuthProvider: React.FC = ({ children }) => {
  const auth: IAuth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

function useAuthProvider() {
  const [user, setUser] = useState<IUser | null>(null);

  const handleUser = (rawUser: IUserFirebase) => {
    if (rawUser) {
      const user: IUser = formatUser(rawUser);
      createUser(user.uid, user);

      setUser(user);
      return user;
    }
    setUser(null);
    return null;
  };

  const signInWithGithub = () => {
    return auth
      .signInWithPopup(githubAuthProvider)
      .then((response) => handleUser(response.user));
  };

  const signOut = () => {
    return auth.signOut().then(() => handleUser(null));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => handleUser(user));
    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut,
  };
}

const formatUser = (user: any): IUser => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photo: user.photoURL,
});
