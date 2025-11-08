"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import ButtonFill from "../ui/ButtonFill";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const API_URL = process.env.NEXT_PUBLIC_URL_PROD;
    if (!API_URL) {
      console.error("Missing NEXT_PUBLIC_URL_PROD environment variable");
      return;
    }

    try {
      await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error("Error sending contact form:", error);
    }
  };

  return (
    <div className="mt-6 rounded-lg bg-neutral-800 p-6">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name*"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email*"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Message*"
          value={values.message}
          onChange={handleChange}
          required
        ></textarea>
        <ButtonFill type="submit" ariaLabel="Send Message">
          Send
        </ButtonFill>
      </form>
    </div>
  );
}
