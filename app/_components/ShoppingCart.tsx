"use client";

import { useAppSelector } from "@/lib/hooks";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function ShoppingCart() {
    const { noOfItems } = useAppSelector((state) => state.cart);

    return (
        <Link href="/cart" className="relative w-6 h-6">
            <span className="bg-red-500 text-white font-bold px-1.5 py-0.5 text-[10px] rounded-full absolute -top-1.5 -right-3">
                <span className="relative top-[1px]">
                    {noOfItems > 9 ? "9+" : noOfItems}
                </span>
            </span>
            <ShoppingCartIcon className="hover:bg-black/5 px-1 w-7 h-7 rounded" />
        </Link>
    );
}

export default ShoppingCart;
