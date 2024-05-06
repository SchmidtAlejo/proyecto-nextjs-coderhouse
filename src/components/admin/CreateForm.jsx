"use client"

import { useEffect, useState } from "react";
import ButtonFill from "../ui/ButtonFill";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { createProduct, getProduct, updateProduct } from "@/services/products/productsService";
import { getCategories } from "@/services/categories/categoriesService";
import Back from "../Back";
import { useQuery } from "@tanstack/react-query";

export default function CreateForm({ type, product }) {

    const router = useRouter();

    const [values, setValues] = useState({
        title: product?.title || '',
        description: product?.description || '',
        id: product?.id || '',
        stock: product?.stock || "",
        price: product?.price || "",
        category: product?.category || ''
    });

    const [file, setFile] = useState(null);

    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategories()
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let error = false;

        Object.keys(values).forEach((key) => {
            if (values[key] === '') {
                error = true;
            }
        })

        if (type !== 'edit' && file === null) {
            error = true;
        }

        if (error) {
            toast("Complete all fields");
            return;
        }
        if (type !== 'edit') {
            await createProduct(values, file);
        } else {
            await updateProduct(product.id, values);
        }

        router.push('/admin')
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={values.title}
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                />
                <label htmlFor="file" hidden={type === 'edit'}>Image</label>
                <input
                    type="file"
                    name="file"
                    hidden={type === 'edit'}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={handleChange}>
                    {
                        !isLoading && categories.map((category) => (
                            <>
                                {
                                    category.id !== 'all products' && <option selected={category.id === product?.category} value={category.id} key={category.name}>{category.name}</option>
                                }
                            </>
                        ))
                    }
                    <option selected={type !== 'edit'} value={''}>Selece a category</option>
                </select>
                <label htmlFor="id" hidden={type === 'edit'}>ID</label>
                <input
                    type="text"
                    value={values.id}
                    name="id"
                    onChange={handleChange}
                    placeholder="ID"
                    hidden={type === 'edit'}
                />
                <label htmlFor="stock">Stock</label>
                <input
                    type="text"
                    value={values.stock}
                    name="stock"
                    onChange={handleChange}
                    placeholder="Stock"
                />
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    value={values.price}
                    name="price"
                    onChange={handleChange}
                    placeholder="Price"
                />
                <label htmlFor="description">Description</label>
                <textarea
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                    placeholder="description"
                />
                <ButtonFill ariaLabel={type !== 'edit' ? "Create" : "Edit"} type="submit">
                    {type !== 'edit' ? "Create" : "Edit"}
                </ButtonFill>
                <ToastContainer />
            </form>
            <Back />
        </div>
    )
}
