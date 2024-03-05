import Spinner from '@/components/Spinner'
import React from 'react'

export default function loading() {
    return (
        <main className='d-flex flex justify-center items-center'>
            <Spinner />
        </main>
    )
}
