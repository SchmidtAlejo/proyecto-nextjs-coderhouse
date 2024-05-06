"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "@/app/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createUser, createUserGoogle, getUser } from "@/services/users/users";

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
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const response = await getUser(user.uid);
                setRole(response.role);
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

    const registerUser = async ({ email, password, callback, error }) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            const body = { email: email, uid: user.uid };
            await createUser(body);
            setRole('client')
            callback();
        } catch (e) {
            error(error);
        }
    }

    const loginUser = async ({ email, password, callback, error }) => {
        try {
            const { user: userResponse } = await signInWithEmailAndPassword(auth, email, password);
            const response = await getUser(userResponse.uid);
            setRole(response.role);
            callback();
        } catch (e) {
            error(error);
        }
    }

    const logout = async (callback) => {
        await signOut(auth);
        setRole('client')
        callback()
    }

    const googleLogin = async (callback) => {
        const { user } = await signInWithPopup(auth, provider);
        const response = await createUserGoogle({ uid: user.uid, email: user.email });
        await response.json().then(data => setRole(data.role));
        callback();
    }

    return (
        <AuthContext.Provider value={{ user, role, registerUser, loginUser, logout, googleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}
