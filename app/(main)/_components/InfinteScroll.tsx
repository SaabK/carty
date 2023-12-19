import { Button } from "@/components/ui/button";
import { InfiniteScrollProps } from "@/types";
import React from "react";

async function InfinteScroll({ getProducts }: InfiniteScrollProps) {
    const products = await getProducts();

    return (
        <Button variant="secondary" className="px-10 py-5">
            Load More
        </Button>
    );
}

export default InfinteScroll;
