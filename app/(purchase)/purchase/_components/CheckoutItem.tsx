import { Button } from "@/components/ui/button";
import { incrementQuantity } from "@/lib/features/checkout/checkoutSlice";
import { decrementQuantity } from "@/lib/features/checkout/checkoutSlice";
import { useAppDispatch } from "@/lib/hooks";
import { product } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CheckoutItemProps extends product {
    quantity: number;
}

function CheckoutItem({
    thumbnail,
    title,
    quantity,
    price,
    id,
}: CheckoutItemProps) {
    const dispatch = useAppDispatch();

    const handleDecrement = () => {
        dispatch(decrementQuantity(id));
    };

    const handleIncrement = () => {
        dispatch(incrementQuantity(id));
    };

    return (
        <div className="flex gap-2">
            <Image src={thumbnail} width={50} height={50} alt={title} />
            <div className="flex justify-between w-full">
                <div>
                    <h2 className="font-bold text-xl ml-1.5">{title}</h2>
                    <div className="flex gap-1">
                        <Button
                            variant="ghost"
                            className="h-6 px-0.5 py-0.5"
                            onClick={handleDecrement}
                            disabled={quantity == 1}
                        >
                            <ChevronLeft className="w-5" />
                        </Button>
                        <span>{quantity}</span>
                        <Button
                            variant="ghost"
                            className="h-6 px-0.5 py-0.5"
                            onClick={handleIncrement}
                        >
                            <ChevronRight className="w-5" />
                        </Button>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-black/90 text-end">
                        Rs. {(price * 100 * quantity).toLocaleString("en-US")}
                    </p>
                    {quantity > 1 && (
                        <p className="text-black/60 text-sm text-end">
                            Rs. {(price * 100).toLocaleString("en-US")} each
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CheckoutItem;
