"use client";

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import SearchProducts from "../_components/SearchProducts";
import Heading from "@/app/_components/Heading";
import Image from "next/image";
import { fetchProductsBySearch } from "@/lib/features/products/productsThunk";
import { addSearchHistory } from "@/lib/features/products/productsSlice";

function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!query) return;

        dispatch(fetchProductsBySearch(query));
        dispatch(addSearchHistory(query));
    }, [query]);

    const { products } = useAppSelector((state) => state.search);

    return (
        <section className="container">
            <Heading
                text={`${products.length} Products were found for ${query}`}
                className=" text-lg"
            />
            {products.length === 0 && (
                <div className="mx-auto w-fit my-3 flex flex-col items-center">
                    <Image
                        src="/illustrations/no_data.svg"
                        alt="No products were found related to your search"
                        width={240}
                        height={240}
                        className="mt-7 mb-3 relative right-5"
                    />
                    <span className="text-4xl font-bold text-black/50 font-mono">
                        No data was found...
                    </span>
                </div>
            )}
            <SearchProducts products={products} />
        </section>
    );
}

export default Search;
