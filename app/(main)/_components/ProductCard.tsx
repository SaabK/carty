import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LucideShoppingCart } from "lucide-react";
// import star from "/icons/yellow_star.png";

import Image from "next/image";
import React from "react";

interface ProductCardProps {
    product: product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="w-56">
            <Image
                src={product.thumbnail}
                alt={product.title}
                width={256}
                height={150}
                className="max-h-full w-full object-cover h-32 overflow-hidden rounded-t-md" // or use max-h-32 ( same as height )
            />
            <CardHeader className="pb-4">
                <CardTitle className="truncate text-lg">
                    {product.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                    {product.description}. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Qui, inventore!
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between pb-2">
                <Button variant="ghost">
                    <LucideShoppingCart className="w-4" />
                </Button>
                <span className="font-bold text-xl">
                    Rs.
                    {(product.price * 100).toLocaleString("en-US")}
                </span>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="default" className="text-xs h-8 px-3">
                    Buy Now
                </Button>
                <div className="bg-primary/5 flex justify-between items-center px-3 h-8 rounded cursor-pointer hover:bg-primary/10 transition-all">
                    <Image
                        src="/icons/yellow_star.png"
                        width={20}
                        height={20}
                        alt="Ratings"
                        className="w-5 mr-1"
                    />
                    <span className="font-bold text-sm">
                        {product.rating.toPrecision(2)}
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
