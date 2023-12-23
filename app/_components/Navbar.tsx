import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

function Navbar() {
    return (
        <header className="container py-4 flex gap-5 items-center justify-center">
            <Logo />
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
