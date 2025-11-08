import { db } from "@/firebase/config";
import { collection, doc, getDoc, query, updateDoc, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    productId: string
}

export async function GET(request: NextRequest, { params }: {params: Promise<Params>}) {
    const { productId: id } = await params;

    const docRef = doc(db, 'products', id);

    const docSnap = await getDoc(docRef);

    return NextResponse.json(docSnap.data());
}

export async function PUT(request: NextRequest, { params }: {params: Promise<Params>}) {
    const { productId: id } = await params;
    const body = await request.json();

    const ref = doc(db, 'products', id);
    await updateDoc(ref, body);

    return NextResponse.json({ message: 'Product update' })
}