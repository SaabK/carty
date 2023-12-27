import React from "react";
import CartProduct from "./CartProduct";
import { CartItem } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CartProductsProps {
    cart: CartItem[];
}

function CartProducts({ cart }: CartProductsProps) {
    return (
        <section role="list" className="grid grid-cols-1 gap-3">
            {cart.length === 0 ? (
                <div className="flex flex-col items-center gap-2.5 my-7 mt-10">
                    <p className="font-bold text-4xl text-primary/60">
                        Nothing to show here...
                    </p>
                    <Button className="w-fit mx-auto" variant="secondary">
                        <Link href="/">Shop Now</Link>
                    </Button>
                </div>
            ) : (
                <>
                    {cart.map((cartItem: CartItem, index: number) => (
                        <div className="py-2 rounded grid grid-cols-7 gap-4 items-start">
                            <CartProduct
                                {...cartItem.product}
                                quantity={cartItem.quantity}
                                key={index}
                            />
                        </div>
                    ))}
                </>
            )}
        </section>
    );
}

export default CartProducts;
