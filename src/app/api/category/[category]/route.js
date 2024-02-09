import { db } from "@/app/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}

export async function GET(request, { params }) {

    const { category } = params

    const prodRef = collection(db, 'products');


    const q = category === 'all products' ?
        prodRef :
        query(prodRef, where('category', "==", category));


    const querySnap = await getDocs(q);
    
    const docs = querySnap.docs.map(doc => doc.data());

    revalidatePath('category/[category]', "page");

    return NextResponse.json(docs);
}