"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { product } from "@/types";

interface AddToCartProps {
    product: product;
    name: string;
}

function AddToCart({ product, name }: AddToCartProps) {
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);
    const { toast } = useToast();

    const handleCart = () => {
        dispatch(addToCart({ product, quantity }));

        toast({
            title: "Added To Cart",
            description: `${name} was added to cart`,
            action: (
                <ToastAction altText="View Cart">
                    <Link href="/cart">View Cart</Link>
                </ToastAction>
            ),
        });
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity === 1) return;
        setQuantity((prev) => prev - 1);
    };

    return (
        <div>
            <div className="flex items-center gap-[13px]">
                <Button
                    variant="outline"
                    className="px-2.5 py-0 h-9"
                    onClick={handleDecrement}
                    disabled
                >
                    <Minus className="w-4" />
                </Button>
                {quantity}
                <Button
                    variant="outline"
                    className="px-2.5 py-0 h-9"
                    onClick={handleIncrement}
                >
                    <Plus className="w-4" />
                </Button>
            </div>
            <Button className="mt-2" onClick={handleCart}>
                Add to Cart
            </Button>
        </div>
    );
}

export default AddToCart;
