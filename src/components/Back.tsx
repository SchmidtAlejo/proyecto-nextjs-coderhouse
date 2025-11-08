"use client"

import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export default function Back({className}: Props) {
    
  const router = useRouter();
  return (
    <p className={"cursor-pointer "+ className} onClick={router.back}>Back</p>
  )
}
