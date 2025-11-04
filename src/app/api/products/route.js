import { db, storage } from "@/app/firebase/config";
import { collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { NextResponse } from "next/server";

export async function POST(request) {

    const formData = await request.formData();
    const file = formData.get("thumbnail");
    const body = {
        title: formData.get("title"),
        description: formData.get("description"),
        id: formData.get("id"),
        stock: formData.get("stock"),
        price: formData.get("price"),
        category: formData.get("category")
    };
    const storageRef = ref(storage, `products/${body.id}`);
    const fileSnapshot = await uploadBytes(storageRef, file);
    const fileUrl = await getDownloadURL(fileSnapshot.ref);
    const product = {
        ...body,
        thumbnail: fileUrl,
        images: [fileUrl]
    }

    await setDoc(doc(db, "products", product.id.toString()), product);

    return NextResponse.json(product);
}