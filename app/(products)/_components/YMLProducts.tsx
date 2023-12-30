import Heading from "@/app/_components/Heading";
import ProductCard from "@/app/_components/ProductCard";
import { URL } from "@/data";
import { product } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface YMLProductsProps {
    category: string;
}

const fetchProductsByCategory = (category: string) => {
    const products = axios
        .get(`${URL}/category/${category}`)
        .then((res) => res.data.products);
    return products;
};

function YMLProducts({ category }: YMLProductsProps) {
    const [products, setProducts] = useState<product[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetchProductsByCategory(category);

            setProducts(response);
        })();
    }, [category]);

    return (
        <section className="mt-12">
            {/* TODO: When clicked on add to cart button make sure to bring the screen to this section */}
            <Heading text="You May Also Like" />
            <div className="cards-spaced">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
}

export default YMLProducts;
