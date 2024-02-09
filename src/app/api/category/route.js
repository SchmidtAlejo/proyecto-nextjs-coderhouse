import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {

    const categoryRef = collection(db, 'categories');

    const querySnap = await getDocs(categoryRef);

    const docs = querySnap.docs.map(doc => {
        return (
            {
                ...doc.data(),
                id: doc.id
            }
        )
    });

    docs.unshift({
        name: "All products",
        id: "all products"
    })

    return NextResponse.json(docs);
}