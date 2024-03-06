"use client"

import { useState } from "react"
import ButtonFill from "../ui/ButtonFill";
import { useAuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import Image from "next/image";
import googleIcon from '@/assets/google.svg'

export default function LoginForm({ admin, URL }) {
    const { registerUser, loginUser, googleLogin } = useAuthContext();
    const router = useRouter();
    const goToHome = () => {
        router.push("/");
    }
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [valuesRegister, setValuesRegister] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleChangeRegister = (e) => {
        setValuesRegister({ ...valuesRegister, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.email === "" || values.password === "") {
            toast("Incomplete data");
            return
        }
        if (values.password.length < 6) {
            toast("The password must be at least 6 characters");
            return
        }
        loginUser({ URL: URL, ...values, callback: () => goToHome(), error: () => toast("Invalid email or password") });
    }
    const handleSubmitGoogle = (e) => {
        e.preventDefault();
        googleLogin(URL, () => goToHome());
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (valuesRegister.email === "" || valuesRegister.password === "" || valuesRegister.confirmPassword === "") {
            toast("Incomplete data");
            return
        }

        if (valuesRegister.password !== valuesRegister.confirmPassword) {
            toast("Passwords do not match");
            return;
        }
        registerUser({ ...valuesRegister, URL: URL, callback: () => goToHome(), error: () => toast("User exist") });
    }

    return (
        <div className="bg-neutral-800 px-8 py-6 rounded-md flex gap-x-4">
            <form className="flex-1" onSubmit={handleSubmit}>
                <h2 className="text-xl">Login</h2>
                <input
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    className="p-2 rounded w-full block bg-neutral-700 my-4"
                    name="email"
                    onChange={handleChange} />
                <input
                    type="password"
                    value={values.password}
                    placeholder="Password"
                    className="p-2 rounded w-full block bg-neutral-700 my-4"
                    name="password"
                    onChange={handleChange} />
                <ButtonFill type="submit">Login</ButtonFill>
                {!admin &&
                    <div className="w-full flex justify-center">
                        <Image src={googleIcon} alt="google icon" onClick={handleSubmitGoogle} className="w-12 h-12 cursor-pointer" />
                    </div>
                }
            </form>
            {
                !admin &&
                <form className="flex-1 flex flex-col" onSubmit={handleSubmitRegister}>
                    <h2 className="text-xl">Register</h2>
                    <input
                        type="email"
                        value={valuesRegister.email}
                        placeholder="Email"
                        className="p-2 rounded w-full block bg-neutral-700  mt-4"
                        name="email"
                        onChange={handleChangeRegister} />
                    <input
                        type="password"
                        value={valuesRegister.password}
                        placeholder="Password"
                        className="p-2 rounded w-full block bg-neutral-700  mt-4"
                        name="password"
                        onChange={handleChangeRegister} />
                    <input
                        type="password"
                        value={valuesRegister.confirmPassword}
                        placeholder="Confirm password"
                        className="p-2 rounded w-full block bg-neutral-700 mt-4"
                        name="confirmPassword"
                        onChange={handleChangeRegister} />
                    <ButtonFill type="submit" className="mt-auto">Register</ButtonFill>
                </form>
            }

            <ToastContainer />
        </div>
    )
}
