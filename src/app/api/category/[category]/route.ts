import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    category: string
}

export async function GET(request: NextRequest, { params }: {params: Promise<Params>}) {

    const { category } = await params

    const prodRef = collection(db, 'products');


    const q = category === 'all products' ?
        prodRef :
        query(prodRef, where('category', "==", category));


    const querySnap = await getDocs(q);
    
    const docs = querySnap.docs.map(doc => doc.data());

    revalidatePath('category/[category]', "page");

    return NextResponse.json(docs);
}