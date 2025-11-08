import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    orderId: string
}

export async function GET(request: NextRequest, { params }: {params: Promise<Params>}) {
    const { orderId: id } = await params;

    const docRef = doc(db, 'orders', id);

    const docSnap = await getDoc(docRef);

    return NextResponse.json(docSnap.data());
}