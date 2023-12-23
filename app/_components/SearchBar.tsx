"use client";

import React, { useState } from "react";
import { XCircle, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { fetchProductsBySearch } from "@/lib/features/products/productsThunk";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SearchBar() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    const [search, setSearch] = useState<string>(query || "");
    const dispatch = useAppDispatch();

    const resetSearch = () => {
        setSearch("");
    };

    const handleSearch = async () => {
        if (!search) return;

        dispatch(fetchProductsBySearch(search));

        // use Path name, if this is already search then don't redired, otherwise redirect the page

        // Set the products in redux then redirect to search page and fetch those products there from redux
    };

    return (
        <div className="relative w-full">
            {/* TODO: Add search history */}
            <Input
                type="text"
                placeholder="Search"
                className="focus-visible:ring-transparent focus-visible:border-primary focus-visible:border-2"
                id="search"
                autoComplete="off"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Link href={`/search?q=${search}`}>
                <Search
                    className="absolute right-3 w-5 cursor-pointer opacity-90"
                    style={{ top: "calc(50% - 0.75rem)" }}
                    onClick={handleSearch}
                />
            </Link>
            {search && (
                <XCircle
                    className="absolute right-10 w-4 cursor-pointer opacity-80"
                    onClick={resetSearch}
                    style={{ top: "calc(50% - 0.75rem)" }}
                />
            )}
        </div>
    );
}

export default SearchBar;
