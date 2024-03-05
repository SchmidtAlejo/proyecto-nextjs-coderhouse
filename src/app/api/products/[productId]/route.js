import { db } from "@/app/firebase/config";
import { collection, doc, getDoc, query, updateDoc, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { productId: id } = params;

    const docRef = doc(db, 'products', id);

    const docSnap = await getDoc(docRef);

    return NextResponse.json(docSnap.data());
}

export async function PUT(request, { params }) {
    const { productId: id } = params;
    const body = await request.json();

    const ref = doc(db, 'products', id);
    await updateDoc(ref, body);

    return NextResponse.json({ message: 'Product update' })
}