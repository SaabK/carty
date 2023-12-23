"use client";

import React, { useState } from "react";
import { XCircle, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProductsBySearch } from "@/lib/features/products/productsThunk";
import { useRouter, useSearchParams } from "next/navigation";
import { adjustProgress } from "@/lib/features/loading/loadingSlice";

function SearchBar() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    const router = useRouter();

    const [search, setSearch] = useState<string>(query || "");
    const dispatch = useAppDispatch();
    const { progress } = useAppSelector((state) => state.loading);

    const resetSearch = () => {
        setSearch("");
    };

    const handleSearch = async () => {
        if (!search) return;

        dispatch(adjustProgress(progress + 10));

        dispatch(adjustProgress(progress + 10));
        dispatch(fetchProductsBySearch(search));

        router.push(`/search?q=${search}`);
        dispatch(adjustProgress(100));
    };

    return (
        <>
            <div className="relative w-full">
                {/* TODO: Add search history */}
                <Input
                    type="text"
                    placeholder="Search"
                    className="focus-visible:ring-transparent focus-visible:border-primary focus-visible:border-b-4"
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
            </div>
        </>
    );
}

export default SearchBar;
