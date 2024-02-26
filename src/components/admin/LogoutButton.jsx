"use client"

import React from 'react'
import ButtonFill from '../ui/ButtonFill'
import { useAuthContext } from '../context/AuthContext'

export default function LogoutButton() {

    const { logout } = useAuthContext()

    return (
        <div>
            <ButtonFill onClick={logout} className="bg-red-500 hover:bg-red-400">
                Logout
            </ButtonFill>
        </div>
    )
}
