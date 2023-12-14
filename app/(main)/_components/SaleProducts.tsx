"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

function SaleProducts() {
  const [products, setProducts] = useState<any[]>([]);
  // const ref = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const [cardsThatCanFit, setCardsThatCanFit] = useState<number | undefined>(0);

  useLayoutEffect(() => {
    console.log("Container Width: ", containerRef.current?.offsetWidth);
    console.log("Width: ", cardRefs.current[0]?.offsetWidth);

    // console.log(
    //   "Cards that can fit in: ",
    //   containerRef.current?.offsetWidth! / ref.current?.offsetWidth!
    // );

    setCardsThatCanFit(
      Math.floor(
        containerRef.current?.offsetWidth! / cardRefs.current[0]?.offsetWidth!
      )
    );
  }, [products]);

  console.log(cardsThatCanFit);
  useEffect(() => {
    console.log(cardsThatCanFit);

    fetch(`https://dummyjson.com/products?limit=${cardsThatCanFit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        // console.log(data.products);
      });
  }, [cardsThatCanFit]);

  return (
    <section id="products-on-sale" className="py-5 container">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl my-2 bg-black text-white px-3 py-1.5 w-fit rounded-sm">
          Flash Sale
        </h2>
        <Button variant="outline">Shop Now</Button>
      </div>
      <div ref={containerRef} className="grid col-auto gap-x-3" id="products">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            innerRef={(el: any) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}

export default SaleProducts;
