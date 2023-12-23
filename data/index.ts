export const URL = "https://dummyjson.com/products";

import { Socials } from "@/types";
import { Facebook, Instagram, Youtube, Github, Twitter } from "lucide-react";

export const socials: Socials[] = [
    {
        name: "facebook",
        icon: Facebook,
        href: "https://www.facebook.com/profile.php?id=100073245827769",
    },
    {
        name: "instagram",
        icon: Instagram,
        href: "https://www.instagram.com/bakwasboye/",
    },
    {
        name: "youtube",
        icon: Youtube,
        href: "https://www.youtube.com/@AliBinNaseer",
    },
    {
        name: "github",
        icon: Github,
        href: "https://www.github.com/SaabK",
    },
    {
        name: "twitter",
        icon: Twitter,
        href: "https://twitter.com/AliBinTweets",
    },
];
