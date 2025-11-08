"use client"

import { useAuthContext } from "@/context/AuthContext"

export default function Adminlayout({ children, login }) {

    const { role, } = useAuthContext();
    return (
        <div>
            {
                role === 'admin' ? children :
                    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-black bg-opacity-25">
                        {login}
                    </div>
            }
        </div>
    )
}
