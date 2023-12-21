"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import ProductCard from "../../_components/ProductCard";

import { URL } from "@/data";
import { product } from "@/types";
import { Button } from "@/components/ui/button";
import Loading from "./Loading";
import Heading from "@/app/_components/Heading";

// Add skeletons too

function getProducts(limit = 30) {
    const products = axios
        .get(`${URL}?limit=${limit}`)
        .then((res) => res.data.products);

    return products;
}

function JFYProducts() {
    const [products, setProducts] = useState<product[]>([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(30);

    useEffect(() => {
        setLoading(true);
        (async function () {
            const result = await getProducts(limit);

            setProducts(result);
            setLoading(false);
        })();
    }, [limit]);

    const loadMore = () => {
        setLimit((prevLimit) => prevLimit + 30);
    };

    return (
        <section className="container my-7">
            <Heading text="Just For You" />
            <div className="flex justify-between flex-wrap gap-6">
                {products.slice(5).map((product: product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Loading loading={loading} />
            <div className="my-4 flex items-center justify-center">
                {limit < 100 ? (
                    <Button
                        variant="secondary"
                        className="px-10 py-5"
                        onClick={loadMore}
                    >
                        Load More
                    </Button>
                ) : (
                    <Button variant="outline">
                        <a href="#search">Search for more</a>
                    </Button>
                )}
            </div>
        </section>
    );
}

export default JFYProducts;
