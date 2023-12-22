"use client";

import Link from "next/link";
import React from "react";
import { socials } from "@/data";
import SocialIcon from "./SocialIcon";

function Footer() {
    return (
        <footer className="bg-primary ">
            <div className="container my-2.5 flex justify-between items-center">
                <span className="text-2xl font-extrabold mr-4 cursor-pointer text-white">
                    <Link href="/">Carty.</Link>
                </span>
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
