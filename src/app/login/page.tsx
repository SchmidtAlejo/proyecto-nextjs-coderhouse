import LoginForm from "@/components/auth/LoginForm";
import React from "react";

export const metadata = {
  title: "Login",
  description: "Login page"
};

export default function page() {
  return (
    <main>
      <div className='container-space'>
        <LoginForm admin={false} />
      </div>
    </main>
  );
}

