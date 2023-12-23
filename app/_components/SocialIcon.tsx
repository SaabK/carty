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
                    width={20}
                    height={20}
                    fill={isHover ? "white" : ""}
                />
            </Link>
        </li>
    );
}

export default SocialIcon;
