"use client";

import { calculateTotal } from "@/lib/features/checkout/checkoutSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import CheckoutItem from "./CheckoutItem";
import CheckoutTotal from "./CheckoutTotal";

function Checkout() {
    const { productsToBuy, total } = useAppSelector((state) => state.checkout);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, [productsToBuy, dispatch]);

    return (
        <div className="">
            <div>
                <p className="font-black uppercase text-primary/60 tracking-wider">
                    Price To Pay
                </p>
                <span className="font-mono text-3xl">
                    Rs.{(total * 100).toLocaleString("en-US")}
                </span>
            </div>

            <div className="my-6 flex flex-col gap-2">
                {productsToBuy.map((item, index) => (
                    <CheckoutItem
                        key={index}
                        {...item.product}
                        quantity={item.quantity}
                    />
                ))}
            </div>

            <hr />

            <div>
                <CheckoutTotal total={total} />
            </div>
        </div>
    );
}

export default Checkout;
