"use client"

import { useRouter } from "next/navigation";

export default function Back({className}) {
    
  const router = useRouter();
  return (
    <p className={"cursor-pointer "+ className} onClick={router.back}>Back</p>
  )
}
