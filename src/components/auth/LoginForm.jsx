"use client"

import { useState } from "react"
import ButtonFill from "../ui/ButtonFill";
import { useAuthContext } from "../context/AuthContext";

export default function LoginForm() {
    const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(values);
    }

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-black bg-opacity-25">
            <form className="bg-neutral-800 px-8 py-6 rounded-md" onSubmit={handleSubmit}>
                <h2 className="text-xl">Login</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Email"
                    className="p-2 rounded w-full block bg-neutral-700 my-4"
                    name="email"
                    onChange={handleChange} />
                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="Password"
                    className="p-2 rounded w-full block bg-neutral-700 my-4"
                    name="password"
                    onChange={handleChange} />
                <ButtonFill type="submit">Login</ButtonFill>
                <ButtonFill onClick={googleLogin} className="bg-neutral-600 hover:bg-neutral-700 mt-4">Login with Google</ButtonFill>
                <p onClick={() => registerUser(values)} className="text-blue-500 cursor-pointer mt-4 hover:text-blue-400">Register</p>
            </form>
        </div>
    )
}
