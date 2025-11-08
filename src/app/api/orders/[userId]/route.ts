import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    userId: string
}

export async function GET(request: NextRequest, { params }: {params: Promise<Params>}) {
    const { userId } = await params;

    const ref = collection(db, "orders");
    const q = query(ref, where('uid', "==", userId));
    const docSnap = await getDocs(q);
    const result = docSnap.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
    });
    return NextResponse.json(result);
}