"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "@/app/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createUser, createUserGoogle, getUser } from "@/services/users/users";
const API_URL = process.env.NEXT_URL_DEV;

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });
    const [role, setRole] = useState('client');

    useEffect(() => {
        setRole(localStorage.getItem('role'));
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid,
                })
            }
            else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null,
                })
            }
        })
    }, []);

    const registerUser = async ({ email, password, URL, callback, error }) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            const body = { email: email, uid: user.uid };
            await createUser(body, URL);
            localStorage.setItem("role", "client");
            setRole('client')
            callback();
        } catch (e) {
            error(error);
        }
    }

    const loginUser = async ({ URL, email, password, callback, error }) => {
        try {
            const { user: userResponse } = await signInWithEmailAndPassword(auth, email, password);
            const response = await getUser(userResponse.uid, URL);
            localStorage.setItem("role", response.role);
            setRole(response.role);
            callback();
        } catch (e) {
            error(error);
        }
    }

    const logout = async (callback) => {
        await signOut(auth);
        localStorage.setItem("role", "client");
        setRole('client')
        callback()
    }

    const googleLogin = async (URL, callback) => {
        const { user } = await signInWithPopup(auth, provider);
        const response = await createUserGoogle({ uid: user.uid, email: user.email }, URL);
        await response.json().then(data => setRole(data.role));
        callback();
    }

    return (
        <AuthContext.Provider value={{ user, role, registerUser, loginUser, logout, googleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}
