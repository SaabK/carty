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

import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: any;
  innerRef: any;
}

// TODO: Fix the bug of products not taking up the whole space.

function ProductCard({ product, innerRef }: ProductCardProps) {
  return (
    <Card className="w-56" ref={innerRef}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={256}
        height={150}
        className="max-h-full w-full object-cover h-32" // or use max-h-32 ( same as height )
      />
      <CardHeader className="pb-2">
        <CardTitle className="truncate text-xl">{product.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between pb-2">
        <Button variant="ghost">
          <LucideShoppingCart className="w-4" />
        </Button>
        <span className="font-bold text-xl">${product.price}.99</span>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">
          See More
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
