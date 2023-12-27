import { Button } from "@/components/ui/button";
import { product } from "@/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useAppDispatch } from "@/lib/hooks";
import {
    decrementQuantity,
    deleteItem,
    incrementQuantity,
} from "@/lib/features/cart/cartSlice";

interface CartProductProps extends product {
    quantity: number;
}

function CartProduct({
    id,
    thumbnail,
    title,
    description,
    brand,
    price,
    quantity,
}: CartProductProps) {
    const dispatch = useAppDispatch();

    const handleDecrement = () => {
        if (quantity == 1) return;
        dispatch(decrementQuantity(id));
    };

    const handleIncrement = () => {
        dispatch(incrementQuantity(id));
    };

    const handleDelete = () => {
        dispatch(deleteItem(id));
    };

    return (
        <>
            <Image
                src={thumbnail}
                alt="text"
                width={170}
                height={100}
                className="rounded object-cover h-44 w-full col-span-2"
            />
            <div className="col-span-5 flex flex-col h-44">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <Button
                        variant="ghost"
                        className="px-2 py-0.5"
                        onClick={handleDelete}
                    >
                        <Trash2
                            color="#FF7F7F"
                            // className="w-6 cursor-pointer hover:bg-primary/5 p-1 rounded"
                            className="w-5"
                        />
                    </Button>
                </div>
                <p className="text-sm text-justify">
                    {description} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Eos tenetur est omnis asperiores sunt
                    aperiam! Lorem ipsum.
                </p>
                <Badge className="w-fit text-xs mt-2">{brand}</Badge>
                <div className="flex mt-auto justify-between">
                    <span className="text-2xl font-bold font-mono underline">
                        Rs. {(price * 100).toLocaleString("en-US")}
                    </span>
                    <div className="flex items-center gap-[13px]">
                        <Button
                            variant="outline"
                            className="px-2.5 py-0 h-8"
                            onClick={handleDecrement}
                            disabled={quantity == 1}
                        >
                            <Minus className="w-3" />
                        </Button>
                        {quantity}
                        <Button
                            variant="outline"
                            className="px-2.5 py-0 h-8"
                            onClick={handleIncrement}
                        >
                            <Plus className="w-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartProduct;
