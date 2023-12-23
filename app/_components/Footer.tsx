"use client";

import React from "react";
import { socials } from "@/data";
import SocialIcon from "./SocialIcon";
import Logo from "./Logo";

function Footer() {
    return (
        <footer className="bg-primary ">
            <div className="container my-2.5 flex justify-between items-center">
                <Logo className="text-white" size="small" />
                <p className="text-white text-xs">
                    Made by Ali Bin Naseer with ❤️
                </p>
                <ul className="flex justify-between gap-3">
                    {socials.map((social, index) => (
                        <SocialIcon social={social} key={index} />
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
