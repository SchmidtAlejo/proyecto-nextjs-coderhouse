"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "@/app/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
            }
            else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])

    const registerUser = async ({ email, password }) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = async ({ email, password }) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async () => {
        await signOut(auth);
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider);
    }

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, logout, googleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}
