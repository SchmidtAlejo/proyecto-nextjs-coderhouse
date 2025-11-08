"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main>
      <div className='container-space'>
        <h1 className='mb-12 text-4xl'>Product not found</h1>
        <Link href={"/"} className='text-xl text-blue-400' aria-label="Go back home" rel="noopener noreferrer">Go back home</Link>
      </div>
    </main>
  );
}
