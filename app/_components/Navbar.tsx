import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <header className="container py-4 flex gap-5 items-center justify-center">
            <span className="text-3xl font-extrabold mr-4 cursor-pointer">
                <Link href="/">Carty.</Link>
            </span>
            <Input
                type="text"
                placeholder="Search"
                className="focus-visible:ring-transparent focus-visible:border-primary focus-visible:border-2"
                id="search"
                autoComplete="off"
            />
            <div className="flex gap-2">
                <Button type="button" variant="ghost">
                    Login
                </Button>
                <Button type="button" variant="default">
                    Signup
                </Button>
            </div>
        </header>
    );
}

export default Navbar;
