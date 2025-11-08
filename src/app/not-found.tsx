import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main>
      <div className='container-space'>
        <h1 className='mb-12 text-4xl'>Error 404: Not found</h1>
        <Link href={"/"} className='text-xl text-blue-400' aria-label="Go back home" rel="noopener noreferrer">Go back home</Link>
      </div>
    </main>
  );
}
