import { db } from "@/app/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { userId } = params;

    const ref = collection(db, "orders");
    const q = query(ref, where('uid', "==", userId));
    const docSnap = await getDocs(q);
    const result = docSnap.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
    });
    return NextResponse.json(result);
}