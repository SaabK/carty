import React from "react";
import ProductCard from "../../_components/ProductCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { URL } from "@/data";
import { product } from "@/types";
import Heading from "@/app/_components/Heading";

async function SaleProducts() {
    const response = await axios.get(`${URL}?limit=5`);
    const { products } = await response.data;

    return (
        <section id="products-on-sale" className="py-5 container">
            <div className="flex items-center justify-between">
                <Heading text="Flash Sale" />
                <Button variant="outline">Shop Now</Button>
            </div>
            <div className="cards-spaced" id="products">
                {products.map((product: product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default SaleProducts;
