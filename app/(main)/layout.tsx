"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
    calculateQuantity,
    calculateTotal,
} from "@/lib/features/cart/cartSlice";

function HomeLayout({ children }: { children: React.ReactNode }) {
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
        dispatch(calculateQuantity());
    }, [cart]);

    return (
        <>
            <main>{children}</main>
        </>
    );
}

export default HomeLayout;
