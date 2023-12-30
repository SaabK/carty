"use client";

import React, { useEffect, useState } from "react";
import { XCircle, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProductsBySearch } from "@/lib/features/products/productsThunk";
import { useRouter, useSearchParams } from "next/navigation";
import {
    addSearchHistory,
    removeSearchHistory,
} from "@/lib/features/products/productsSlice";
import { Button } from "@/components/ui/button";
import {
    calculateQuantity,
    calculateTotal,
} from "@/lib/features/cart/cartSlice";

function SearchBar() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    const router = useRouter();

    const [search, setSearch] = useState<string>(query || "");
    const [focused, setFocused] = useState(false);

    const dispatch = useAppDispatch();
    const { searchHistory } = useAppSelector((state) => state.search);

    const { cart } = useAppSelector((state) => state.cart);

    useEffect(() => {
        dispatch(calculateTotal());
        dispatch(calculateQuantity());
    }, [cart]);

    const resetSearch = () => {
        setSearch("");
    };

    const handleSearch = async () => {
        setFocused(false);
        if (!search) return;

        dispatch(fetchProductsBySearch(search));
        dispatch(addSearchHistory(search));

        // Send the search term to the store

        router.push(`/search?q=${search}`);
    };

    const handleHistoryClick = () => {
        console.log("Clicked");
        setFocused(true);
    };

    return (
        <>
            <div className="relative w-full">
                {/* TODO: Add search history */}
                <Input
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    type="text"
                    placeholder="Search"
                    className={`focus-visible:ring-transparent focus-visible:rounded-b-none pr-16`}
                    id="search"
                    autoComplete="off"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <Search
                    className="absolute right-3 w-5 cursor-pointer opacity-90"
                    style={{ top: "calc(50% - 0.75rem)" }}
                    onClick={handleSearch}
                />
                {search && (
                    <XCircle
                        className="absolute right-10 w-4 cursor-pointer opacity-80"
                        onClick={resetSearch}
                        style={{ top: "calc(50% - 0.75rem)" }}
                    />
                )}
                {focused && searchHistory.length > 0 && (
                    <div
                        className="w-full bg-black absolute flex flex-wrap gap-3 p-3 rounded-b-md"
                        id="search-history"
                    >
                        {[...searchHistory].reverse().map((text) => (
                            <>
                                <span className="px-2 py-1 rounded bg-white text-black text-xs">
                                    {text}
                                </span>
                            </>
                        ))}
                        {/* <Button
                            variant="destructive"
                            className="text-xs px-2 py-1 h-6 ml-auto z-40"
                            onClick={() => {
                                dispatch(removeSearchHistory());
                                console.log("Does this even work?");
                            }}
                        >
                            Delete All
                        </Button> */}
                    </div>
                )}
            </div>
        </>
    );
}

export default SearchBar;
