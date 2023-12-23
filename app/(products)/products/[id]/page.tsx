"use client";

import { URL } from "@/data";
import { ProductPageProps, product as Product, product } from "@/types";
import Images from "../../_components/Images";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "../../_components/Details";
import YMLProducts from "../../_components/YMLProducts";
import PABProducts from "../../_components/PABProducts";

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
            setProduct(result);
        })();

        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="container my-10">
            {/* Add a loader for when the product has not yet been fetched */}
            <div className="grid grid-cols-2 gap-8 mb-12">
                <Images images={product?.images} />
                <Details {...product} />
            </div>

            <hr />

            {product?.category && <YMLProducts category={product?.category} />}

            <hr />

            <PABProducts />
        </div>
    );
}

export default ProductPage;
