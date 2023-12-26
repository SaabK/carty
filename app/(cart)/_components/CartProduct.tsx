import { Button } from "@/components/ui/button";
import { product } from "@/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

function CartProduct({ thumbnail, title, description, brand, price }: product) {
    return (
        <article className="py-2 rounded grid grid-cols-7 gap-4 items-start ">
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
                    <Trash2
                        color="#FF7F7F"
                        className="w-6 cursor-pointer hover:bg-primary/5 p-1 rounded"
                    />
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
                        <Button variant="outline" className="px-2.5 py-0 h-8">
                            <Minus className="w-3" />
                        </Button>
                        1
                        <Button variant="outline" className="px-2.5 py-0 h-8">
                            <Plus className="w-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default CartProduct;
