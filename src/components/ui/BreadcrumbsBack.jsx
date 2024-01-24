"use client"

import { useRouter } from "next/navigation";

export default function BreadcrumbsBack() {
    
  const router = useRouter();
  return (
    <p className="cursor-pointer " onClick={router.back}>Back</p>
  )
}
