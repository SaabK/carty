import { Button } from "@/components/ui/button";
import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import ShoppingCart from "./ShoppingCart";

function Navbar() {
    const { userId } = auth();

    return (
        <header className="container py-4 flex gap-5 items-center justify-center">
            <Logo />
            <SearchBar />
            <div className="flex gap-2">
                {!userId ? (
                    <>
                        <Button type="button" variant="ghost">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                        <Button type="button" variant="default">
                            <Link href="/sign-up">Signup</Link>
                        </Button>
                    </>
                ) : (
                    <div className="flex items-center gap-6">
                        <ShoppingCart />
                        <UserButton afterSignOutUrl="/" />
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;
