import { Badge } from "@/components/ui/badge";
import { product as Product } from "@/types";
import React from "react";

import Reviews from "./Reviews";
import AddToCart from "./AddToCart";

interface DetailsProps {
    product: Product;
}

function Details({
    product: { title, description, brand, price, rating, category },
    product,
}: DetailsProps) {
    return (
        <article className="flex flex-col gap-2.5 justify-between">
            <div>
                <Badge variant="secondary" className="w-fit">
                    {category}
                </Badge>
                <h1 className="text-3xl font-bold leading-8 mt-1">
                    {title} - Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                </h1>
                <span className="text-sm font-bold">{brand}</span>
            </div>

            <Reviews rating={rating} />

            <div className="mt-1">
                <h2 className="font-bold text-lg underline italic mb-1">
                    {title}:
                </h2>
                <p className="leading-6 tracking-wide">
                    {description}. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ut repellat sapiente autem iste, odit
                    voluptatem adipisci, minus officiis esse consequuntur
                    aspernatur possimus provident impedit rem debitis culpa
                    delectus itaque non laborum quaerat.
                </p>
            </div>

            <div className="flex items-center md:items-start md:flex-col justify-between gap-2">
                <h3 className="font-light text-4xl md:text-3xl my-1 font-mono underline">
                    Rs.{(price * 100).toLocaleString("en-US")}
                </h3>
                <AddToCart product={product} name={title} />
            </div>
        </article>
    );
}

export default Details;
