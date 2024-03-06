"use client"

import Link from "next/link";
import { useEffect } from "react"

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <main>
            <div className='container-space'>
                <h1 className='text-4xl mb-12'>Category not found</h1>
                <Link href={'/'} className='text-xl text-blue-400'>Go back home</Link>
            </div>
        </main>
    )
}
