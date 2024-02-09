import { db } from "@/app/firebase/config";
import categories from "@/data/categories";
import products from "@/data/products";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";


export async function POST(request, { params }) {

    const prodRef = collection(db, 'products');

    const querySnap = await getDocs(prodRef)

    const response = querySnap.docs.map(doc => doc.data())

    if (response.length === 0) {
        products.forEach(async product => {
            await setDoc(doc(db, "products", product.id.toString()), product);
        })
    }

    return NextResponse.json(response.length);
}