"use client";

import React, { useEffect } from "react";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
    calculateQuantity,
    calculateTotal,
} from "@/lib/features/cart/cartSlice";

function Cart() {
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
        dispatch(calculateQuantity());
    }, [cart]);

    return (
        <>
            <CartProducts cart={cart} />
            <CartTotal />
        </>
    );
}

export default Cart;
