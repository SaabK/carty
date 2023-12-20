import { Badge } from "@/components/ui/badge";
import { product as Product } from "@/types";
import React from "react";

import greyStar from "@/public/icons/grey_star.png";
import yellowStar from "@/public/icons/yellow_star.png";
import Image from "next/image";

function Details({
    title,
    description,
    brand,
    price,
    rating,
    category,
}: Product) {
    // Number(((rating - Math.floor(rating)) * 100).toFixed(2)) is used to get that decimal numbers 4.09 -> 0.09 -> 9.00
    // To get the percentage for the last star, we add the percentage of the previos stars to it so, 4/5 + 9.00%
    const lastRatingStar =
        (Math.floor(rating) / 5) * 100 +
        Number(((rating - Math.floor(rating)) * 100).toFixed(2));

    // Fix this
    console.log(Number((rating - Math.floor(rating)).toFixed(2)));

    return (
        <article className="flex flex-col gap-1.5">
            <div>
                <Badge variant="secondary" className="w-fit">
                    {category}
                </Badge>
                <h1 className="text-3xl font-bold">
                    {title} - Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                </h1>
                <span className="text-sm font-bold">{brand}</span>
            </div>
            <div className="flex gap-3">
                {/* Ratings */}
                <div className="relative w-fit">
                    {/* Base Layer */}
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                width={20}
                                height={20}
                                alt=""
                                src={greyStar}
                                key={index}
                            />
                        ))}
                    </div>
                    {/* Yellow Star Layer */}
                    <div
                        className="flex gap-1 absolute top-0 overflow-hidden"
                        style={{ width: `${lastRatingStar}%` }}
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                width={20}
                                height={20}
                                alt=""
                                src={yellowStar}
                                key={index}
                            />
                        ))}
                    </div>

                    {/* Ratings number */}
                </div>
                <Badge>{rating}</Badge>
            </div>

            <div className="mt-3.5">
                <h2 className="font-bold text-lg">{title}:</h2>
                <p className="leading-6 tracking-wide">
                    {description} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Corporis dolorem cumque cum, molestias
                    maxime hic repudiandae modi eaque ab veniam odio ipsum
                    consequatur voluptatem, tempora tempore doloremque eum
                    architecto ex. Nobis quasi illum laudantium magni ipsum unde
                    qui iusto modi fugit, error officiis. Dignissimos doloribus
                    delectus tenetur ullam numquam porro.
                </p>
            </div>
        </article>
    );
}

export default Details;
