"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import ButtonFill from "../ui/ButtonFill";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { createProduct, updateProduct } from "@/services/products/productsService";
import { categories } from "@/data/categories";
import Back from "../Back";

interface Product {
  id: string | number;
  title: string;
  description: string;
  stock: string | number;
  price: string | number;
  category: string;
}

interface CreateFormProps {
  type: "create" | "edit";
  product?: Product;
}

export default function CreateForm({ type, product }: CreateFormProps) {
  const router = useRouter();

  const [values, setValues] = useState<Product>({
    title: product?.title || "",
    description: product?.description || "",
    id: product?.id || "",
    stock: product?.stock || "",
    price: product?.price || "",
    category: product?.category || "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let error = false;

    Object.keys(values).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((values as any)[key] === "") {
        error = true;
      }
    });

    if (type !== "edit" && file === null) {
      error = true;
    }

    if (error) {
      toast("Complete all fields");
      return;
    }

    try {
      if (type !== "edit") {
        await createProduct(values, file);
      } else if (product?.id) {
        await updateProduct(product.id, values);
      }
      router.push("/admin");
    } catch (err) {
      console.error(err);
      toast("Error saving product");
    }
  };

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

        {type !== "edit" && (
          <>
            <label htmlFor="file">Image</label>
            <input
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </>
        )}

        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={handleChange} value={values.category}>
          <option value="">Select a category</option>
          {categories.map(
            (category) =>
              category !== "all products" && (
                <option key={category} value={category}>
                  {category}
                </option>
              )
          )}
        </select>

        {type !== "edit" && (
          <>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              value={values.id}
              name="id"
              onChange={handleChange}
              placeholder="ID"
            />
          </>
        )}

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
          placeholder="Description"
        />

        <ButtonFill ariaLabel={type !== "edit" ? "Create" : "Edit"} type="submit">
          {type !== "edit" ? "Create" : "Edit"}
        </ButtonFill>

        <ToastContainer />
      </form>

      <Back />
    </div>
  );
}