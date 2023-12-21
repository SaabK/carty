import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import React from "react";

import greyStar from "@/public/icons/grey_star.png";
import yellowStar from "@/public/icons/yellow_star.png";

interface ReviewsProps {
    rating: number;
}

function Reviews({ rating }: ReviewsProps) {
    // Number(((rating - Math.floor(rating)) * 100).toFixed(2)) is used to get that decimal numbers 4.09 -> 0.09 -> 9.00 But it should 9% of the last 20% ( percentage of the remaining star ) so we add: 20%;
    // To get the percentage for the last star, we add the percentage of the previos stars to it so, 4/5 + 9.00%
    let lastRatingStar =
        (Math.floor(rating) / 5 +
            Number((rating - Math.floor(rating)).toFixed(2)) * 0.2) *
        100;

    // For ratings less than 0.17 some number is added to make the last star somewhat visible.
    if (rating - Math.floor(rating) < 0.175) {
        lastRatingStar = lastRatingStar + 5;
    }
    return (
        <div className="flex gap-3">
            {/* Ratings */}
            <div className="relative w-fit">
                {/* Base Layer */}
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            width={22}
                            height={22}
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
                            width={22}
                            height={22}
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
    );
}

export default Reviews;
