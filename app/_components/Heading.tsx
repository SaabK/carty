import { HeadingProps } from "@/types";
import React from "react";

function Heading({ text, className }: HeadingProps) {
    return (
        <h2
            className={`font-bold text-2xl my-2 bg-black text-white px-3 py-1.5 w-fit rounded-sm ${className}`}
        >
            {text}
        </h2>
    );
}

export default Heading;
