import { useAuthContext } from '@/components/context/AuthContext'
import LogoutButton from '@/components/ui/LogoutButton'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "Account",
    description: "Account Information"
}

export default function page() {

    return (
        <main>
            <div className='container-space flex flex-col'>
                <h1 className='text-4xl'>Account</h1>
                <Link href={'/account/orders'} className='mt-12 text-lg text-blue-400'>See all order</Link>
                <div className='w-40 mt-12'>
                    <LogoutButton />
                </div>
            </div>
        </main>
    )
}
