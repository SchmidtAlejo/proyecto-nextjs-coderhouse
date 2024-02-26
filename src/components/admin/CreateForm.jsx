"use client"

import { useState } from "react";
import ButtonFill from "../ui/ButtonFill";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/app/firebase/config";


const createProduct = async (values, file) => {
    const storageRef = ref(storage, `products/${values.id}`);
    const fileSnapshot = await uploadBytes(storageRef, file);
    const fileUrl = await getDownloadURL(fileSnapshot.ref);

    console.log(fileUrl);
    const refDoc = doc(db, "products", values.id);
    return setDoc(refDoc, {
        ...values,
        thumbnail: fileUrl,
        images: [fileUrl]
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((err) => console.error(err));
}

export default function CreateForm() {

    const [values, setValues] = useState({
        title: '',
        description: '',
        id: '',
        stock: "",
        price: "",
        category: ''
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct(values, file);
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <input
                    type="text"
                    value={values.title}
                    required
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="file"
                    required
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input
                    type="text"
                    value={values.category}
                    required
                    name="category"
                    onChange={handleChange}
                    placeholder="Category"
                />
                <input
                    type="text"
                    value={values.id}
                    required
                    name="id"
                    onChange={handleChange}
                    placeholder="ID"
                />
                <input
                    type="text"
                    value={values.stock}
                    required
                    name="stock"
                    onChange={handleChange}
                    placeholder="Stock"
                />
                <input
                    type="text"
                    value={values.price}
                    required
                    name="price"
                    onChange={handleChange}
                    placeholder="Price"
                />
                <textarea
                    value={values.description}
                    required
                    name="description"
                    onChange={handleChange}
                    placeholder="description"
                />
                <ButtonFill type="submit">Create</ButtonFill>
            </form>

        </div>
    )
}
