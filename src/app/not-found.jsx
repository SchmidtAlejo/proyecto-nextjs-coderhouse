import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <main>
            <div className='container-space'>
                <h1 className='text-4xl mb-12'>Error 404: Not found</h1>
                <Link href={'/'} className='text-xl text-blue-400'>Go back home</Link>
            </div>
        </main>
    )
}
