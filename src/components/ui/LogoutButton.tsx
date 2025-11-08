"use client"

import ButtonFill from './ButtonFill'
import { useAuthContext } from '../../context/AuthContext'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {

    const { logout } = useAuthContext();
    const router = useRouter();

    return (
        <div>
            <ButtonFill onClick={() => logout(() => router.push('/'))} className="bg-red-500 hover:bg-red-400" ariaLabel={"Logout"}>
                Logout
            </ButtonFill>
        </div>
    )
}
