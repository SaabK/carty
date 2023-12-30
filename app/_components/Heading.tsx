import { HeadingProps } from "@/types";
import React from "react";

function Heading({ text, className }: HeadingProps) {
    return (
        <h2
            className={`font-bold text-[22px] md:text-2xl my-2 bg-black text-white px-2.5 py-1  md:px-3 md:py-1.5 w-fit rounded-sm ${className}`}
        >
            {text}
        </h2>
    );
}

export default Heading;
