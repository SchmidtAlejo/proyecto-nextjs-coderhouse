import { db } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    const body = await request.json();

    const ref = collection(db, "orders");

    const response = await addDoc(ref, body).catch((err) => console.log(err));

    return NextResponse.json({ message: "Order created", order: response.id });
}