"use client"

import { useAuthContext } from "@/components/context/AuthContext"

export default function Adminlayout({ children, login }) {

    const { user } = useAuthContext();

    return (
        <div>
            {
                user.logged ? children : login
            }
        </div>
    )
}
