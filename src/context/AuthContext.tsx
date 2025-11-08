"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  auth,
  provider,
} from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  User as FirebaseUser,
} from "firebase/auth";
import { createUser, createUserGoogle, getUser } from "@/services/users/users";

interface AuthUser {
  logged: boolean;
  email: string | null;
  uid: string | null;
}

type UserRole = "client" | "admin" | string;

interface RegisterLoginParams {
  email: string;
  password: string;
  callback: () => void;
  error: (err: unknown) => void;
}

interface AuthContextType {
  user: AuthUser;
  role: UserRole;
  registerUser: (params: RegisterLoginParams) => Promise<void>;
  loginUser: (params: RegisterLoginParams) => Promise<void>;
  logout: (callback: () => void) => Promise<void>;
  googleLogin: (callback: () => void) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser>({
    logged: false,
    email: null,
    uid: null,
  });

  const [role, setRole] = useState<UserRole>("client");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const response = await getUser(firebaseUser.uid);
        setRole(response.role);
        setUser({
          logged: true,
          email: firebaseUser.email,
          uid: firebaseUser.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const registerUser = async ({ email, password, callback, error }: RegisterLoginParams) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const body = { email, uid: user.uid };
      await createUser(body);
      setRole("client");
      callback();
    } catch (e) {
      error(e);
    }
  };

  const loginUser = async ({ email, password, callback, error }: RegisterLoginParams) => {
    try {
      const { user: userResponse } = await signInWithEmailAndPassword(auth, email, password);
      const response = await getUser(userResponse.uid);
      console.log(response);      
      setRole(response.role);
      callback();
    } catch (e) {
      error(e);
    }
  };

  const logout = async (callback: () => void) => {
    await signOut(auth);
    setRole("client");
    callback();
  };

  const googleLogin = async (callback: () => void) => {
    const { user } = await signInWithPopup(auth, provider);
    const response = await createUserGoogle({ uid: user.uid, email: user.email });
    const data = await response.json();
    setRole(data.role);
    callback();
  };

  return (
    <AuthContext.Provider
      value={{ user, role, registerUser, loginUser, logout, googleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};