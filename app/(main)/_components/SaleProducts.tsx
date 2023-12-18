import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products?limit=5");

    return response.json();
}

async function SaleProducts() {
    const { products } = await fetchProducts();
    console.log(products);

    return (
        <section id="products-on-sale" className="py-5 container">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl my-2 bg-black text-white px-3 py-1.5 w-fit rounded-sm">
                    Flash Sale
                </h2>
                {/* TODO: add a countdown here instead of shop now button ( just an idea not necessary ) */}
                <Button variant="outline">Shop Now</Button>
            </div>
            <div className="flex items-start justify-between" id="products">
                {products.map((product: product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default SaleProducts;
