import { Button } from "@/components/ui/button";
import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";

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
                        <Link href="/cart" className="relative w-6 h-6">
                            <span className="bg-red-500 text-white font-bold px-1.5 py-0.5 text-xs rounded-full absolute -top-1.5 -right-3">
                                <span className="relative top-[1px]">0</span>
                            </span>
                            <ShoppingCart className="hover:bg-black/5 px-1 w-7 h-7 rounded" />
                        </Link>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;
