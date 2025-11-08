import { db } from "@/firebase/config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    userId: string
}

export async function GET(request: NextRequest, { params }: {params: Promise<Params>}) {
    const { userId: id } = await params;

    try {
        const docRef = collection(db, 'users');
        const q = query(docRef, where('uid', "==", id));
        const docSnap = await getDocs(q);
        const result = docSnap.docs.map(doc => doc.data());
        return NextResponse.json(result[0]);
    } catch (error) {
        return NextResponse.json(error);
    }
}