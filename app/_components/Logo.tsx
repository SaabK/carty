import Link from "next/link";
import React from "react";

interface LogoProps {
    className?: string;
    size?: "small" | "large";
}

function Logo({ className, size = "large" }: LogoProps) {
    return (
        <span
            className={`${
                size === "large" ? "text-3xl" : "text-2xl"
            } font-extrabold mr-4 cursor-pointer ${className}`}
        >
            <Link href="/">Carty.</Link>
        </span>
    );
}

export default Logo;
