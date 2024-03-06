import LoginForm from '@/components/auth/LoginForm'
import React from 'react'
const API_URL = process.env.NEXT_URL_DEV;

export const metadata = {
    title: "Login",
    description: "Login page"
}

export default function page() {
    return (
        <main>
            <div className='container-space'>
                <LoginForm admin={false} URL={API_URL} />
            </div>
        </main>
    )
}

