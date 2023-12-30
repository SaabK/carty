import ProductCard from "@/app/_components/ProductCard";
import { product } from "@/types";
import React from "react";

interface SearchProductsProps {
    products: product[];
}

function SearchProducts({ products = [] }: SearchProductsProps) {
    return (
        <div className="cards">
            {products?.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
    );
}

export default SearchProducts;
