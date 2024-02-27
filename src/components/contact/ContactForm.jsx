"use client"

import React, { useState } from 'react'
import ButtonFill from '../ui/ButtonFill'

export default function ContactForm() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:3000/api/contact', {
            method: "POST",
            body: JSON.stringify(values)
        });
    }

    return (
        <div className="bg-neutral-800 p-6 mt-6 rounded-lg">
            <div className="flex flex-col">
                <input type="text" placeholder="Name*" name='name' onChange={handleChange} required />
                <input type="email" placeholder="Email*" name='email' onChange={handleChange} required />
                <input type="tel" placeholder="Phone" name='phone' onChange={handleChange} required />
            </div>
            <textarea name="message" cols="30" rows="10"
                placeholder="Message*" onChange={handleChange} required></textarea>
            <ButtonFill onClick={handleSubmit}>
                Send
            </ButtonFill>
        </div>
    )
}
