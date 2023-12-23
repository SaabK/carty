import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <header className="container py-4 flex gap-5 items-center justify-center">
            <span className="text-3xl font-extrabold mr-4 cursor-pointer">
                <Link href="/">Carty.</Link>
            </span>
            <SearchBar />
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
