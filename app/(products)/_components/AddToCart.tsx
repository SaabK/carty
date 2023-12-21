import React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

function AddToCart() {
    return (
        <div className="">
            <div className="flex items-center gap-[13px]">
                <Button variant="outline" className="px-2.5 py-0 h-9">
                    <Minus className="w-4" />
                </Button>
                1
                <Button variant="outline" className="px-2.5 py-0 h-9">
                    <Plus className="w-4" />
                </Button>
            </div>
            <Button className="mt-2">Add to Cart</Button>
        </div>
    );
}

export default AddToCart;
