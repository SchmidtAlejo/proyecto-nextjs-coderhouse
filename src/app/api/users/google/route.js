import { db } from "@/app/firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";


export async function POST(request, { params }) {

    const userRef = collection(db, 'users');
    const req = await request.json();
    const user = { ...req, role: "client" };
    const q = query(userRef, where('email', "==", user.email));
    const querySnap = await getDocs(q);
    const docs = querySnap.docs.map(doc => doc.data());

    if (docs.length > 0) {
        return NextResponse.json({ role: user.role });
    }

    await addDoc(userRef, user);

    return NextResponse.json({ role: user.role });
}