"use client";

import { URL } from "@/data";
import { ProductPageProps, product as Product } from "@/types";
import Images from "../../_components/Images";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "../../_components/Details";

const getProduct = (id: string) => {
    const product = axios.get(`${URL}/${id}`).then((res) => res.data);
    return product;
};

// https://dummyjson.com/products/1

function ProductPage({ params: { id } }: ProductPageProps) {
    const [product, setProduct] = useState<Product>({
        id: 0,
        title: "",
        description: "",
        images: [],
        thumbnail: "",
        price: 0,
        rating: 0,
        brand: "",
        category: "",
    });

    useEffect(() => {
        (async () => {
            const result: Product = await getProduct(id);
            console.log(result);
            setProduct(result);
        })();
    }, []);

    return (
        <div className="container grid grid-cols-2 gap-4 my-5">
            <Images images={product?.images} />
            <Details {...product} />
        </div>
    );
}

export default ProductPage;
