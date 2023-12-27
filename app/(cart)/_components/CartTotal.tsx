import { useAppSelector } from "@/lib/hooks";
import React from "react";

function CartTotal() {
    const { price, noOfItems } = useAppSelector((state) => state.cart);

    return (
        <section className="my-6">
            <div className="flex justify-between gap-3">
                <span className="text-base px-3 py-1.5 bg-primary text-white rounded">
                    Total
                </span>
                <span className="text-base px-3 py-1.5 bg-primary text-white rounded">
                    Items
                </span>
            </div>
            <hr className="mb-3 mt-4 border-t-4 border-primary/79" />
            <div className="flex justify-between">
                <span className="text-3xl font-mono">
                    Rs.{(price * 100).toLocaleString("en-US")}
                </span>
                <span className="text-2xl">{noOfItems}</span>
            </div>
        </section>
    );
}

export default CartTotal;
