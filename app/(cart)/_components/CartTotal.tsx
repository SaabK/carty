import { Button } from "@/components/ui/button";
import { productsToPurchase } from "@/lib/features/checkout/checkoutSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function CartTotal() {
    const { price, noOfItems, cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleCheckout = () => {
        dispatch(productsToPurchase(cart));

        router.push("/purchase");
    };

    return (
        <section className="my-6">
            <div className="flex justify-between gap-3">
                <span className="text-base px-3 py-1.5 bg-primary text-white rounded">
                    Total
                </span>
                {/* <Link href="/purchase"> */}
                <Button
                    className="text-sm h-9 px-3.5"
                    variant="outline"
                    onClick={handleCheckout}
                >
                    Checkout
                </Button>
                {/* </Link> */}
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
