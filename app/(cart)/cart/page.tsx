import Heading from "@/app/_components/Heading";
import React from "react";
import CartProduct from "../_components/CartProduct";
import axios from "axios";
import { URL } from "@/data";
import { product } from "@/types";
import ProductCard from "@/app/_components/ProductCard";
import CartProducts from "../_components/CartProducts";
import Cart from "../_components/Cart";

const fetchProducts = () => {
    const randomNumber = Math.floor(Math.random() * 85) + 1;

    const products = axios
        .get(`${URL}?limit=8&skip=${randomNumber}`)
        .then((res) => res.data.products);
    return products;
};

async function CartPage() {
    const products = await fetchProducts();

    return (
        <section className="container my-5">
            <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 items-start">
                <div className="col-span-3">
                    <Heading text="Your Shopping Cart" />
                    <Cart />
                </div>

                {/* TODO: here fetch 2 products of each category of products in the cart. Filter out the same values */}
                <div className="col-span-2 mt-5 md:mt-0">
                    <Heading text="You May Also Like" />
                    <div className="cards-spaced">
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
