import React from "react";
import axios from "axios";

import { product as Product, ProductPageProps } from "@/types";
import { URL } from "@/data";

const getProduct = async (id: string | number) => {
    const response = await axios.get(`${URL}/${id}`);
    const product = await response.data;

    return product;
};

export async function generateMetadata({ params: { id } }: ProductPageProps) {
    try {
        const product: Product = await getProduct(id);
        return {
            title: `${product.title} | Carty - An Ecommerce Platform `,
            description: product.description,
        };
    } catch (error: any) {
        console.error(error);
    }
}

function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}

export default ProductLayout;
