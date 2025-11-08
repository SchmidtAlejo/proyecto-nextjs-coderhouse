import { db } from "@/firebase/config";
import { addDoc, collection, CollectionReference, DocumentReference } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import {Order} from "@/utils/interface";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const ref = collection(db, "orders") as CollectionReference<Order>;

  let response: DocumentReference<Order>;

  try {
    response = await addDoc(ref, body);
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ message: "Error creating order" }, { status: 500 });
  }

  return NextResponse.json({ message: "Order created", order: response.id });
}