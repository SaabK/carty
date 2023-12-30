import { Socials } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

interface SocialIconProps {
    social: Socials;
}

function SocialIcon({ social }: SocialIconProps) {
    const [isHover, setIsHover] = useState(false);

    const handleEnter = () => {
        setIsHover(true);
    };

    const handleLeave = () => {
        setIsHover(false);
    };

    return (
        <li>
            <Link href={social.href} target="_blank">
                <social.icon
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                    color={isHover ? "#333" : "white"}
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill={isHover ? "white" : ""}
                />
            </Link>
        </li>
    );
}

export default SocialIcon;
