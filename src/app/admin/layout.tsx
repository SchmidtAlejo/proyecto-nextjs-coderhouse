"use client";

import { useAuthContext } from "@/context/AuthContext";

export default function Adminlayout({ children, login }) {

  const { role, } = useAuthContext();
  return (
    <div>
      {
        role === "admin" ? children :
          <div className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black/25">
            {login}
          </div>
      }
    </div>
  );
}
