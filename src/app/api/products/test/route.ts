import { db } from "@/firebase/config";
import { products } from "@/data/products";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {

    const prodRef = collection(db, 'products');

    const querySnap = await getDocs(prodRef);

    const response = querySnap.docs.map(doc => doc.data())

    if (response.length === 0) {
        products.forEach(async product => {
            await setDoc(doc(db, "products", product.id.toString()), product);
        })
    }

    return NextResponse.json(response.length);
}