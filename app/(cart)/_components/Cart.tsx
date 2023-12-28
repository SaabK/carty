"use client";

import React, { useEffect } from "react";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";
import { useAppSelector } from "@/lib/hooks";

function Cart() {
    const { cart } = useAppSelector((state) => state.cart);
    return (
        <>
            <CartProducts cart={cart} />
            <CartTotal />
        </>
    );
}

export default Cart;
