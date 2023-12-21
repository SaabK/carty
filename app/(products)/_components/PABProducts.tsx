import Heading from "@/app/_components/Heading";
import ProductCard from "@/app/_components/ProductCard";
import { URL } from "@/data";
import { product } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const fetchRandomProducts = () => {
    const randomNumber = Math.floor(Math.random() * 85) + 1;

    const products = axios
        .get(`${URL}?limit=10&skip=${randomNumber}`)
        .then((res) => res.data.products);
    return products;
};

function PABProducts() {
    const [products, setProducts] = useState<product[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetchRandomProducts();

            setProducts(response);
        })();
    }, []);

    return (
        <section className="mt-12">
            <Heading text="People Also Bought" />
            <div className="flex justify-between gap-6 mt-3 flex-wrap ">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
}

export default PABProducts;
