import { db } from "@/app/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { productId: id } = params;
    
    const docRef = doc(db, 'products', id);

    const docSnap = await getDoc(docRef);

    return NextResponse.json(docSnap.data());
}