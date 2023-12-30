"use client";

import React, { useEffect } from "react";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";
import { useAppSelector } from "@/lib/hooks";

function Cart() {
    const { cart } = useAppSelector((state) => state.cart);
    return (
        <div>
            <CartProducts cart={cart} />
            <CartTotal />
        </div>
    );
}

export default Cart;
