import Heading from "@/app/_components/Heading";
import React from "react";
import CartProduct from "../_components/CartProduct";
import axios from "axios";
import { URL } from "@/data";
import { product } from "@/types";
import ProductCard from "@/app/_components/ProductCard";

async function fetchProducts() {
    const response = await axios.get(`${URL}?limit=5`);
    const products = await response.data.products;

    return products;
}

async function CartPage() {
    const products = await fetchProducts();

    return (
        <section className="container my-5">
            <div className="grid grid-cols-5 gap-6">
                <div className="col-span-3">
                    <Heading text="Your Shopping Cart" />
                    <ul role="list" className="grid grid-cols-1 gap-3">
                        {products.map((product: product, index: number) => (
                            <li key={index}>
                                <CartProduct {...product} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* TODO: here fetch 2 products of each category of products in the cart. Filter out the same values */}
                <div className="col-span-2 self-end">
                    <Heading text="You May Also Like" />
                    <div className="grid grid-cols-2 gap-6">
                        {products.map((product: product, index: number) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartPage;
