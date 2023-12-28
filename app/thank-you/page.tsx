import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ThankYouPage() {
    return (
        <section className="container flex items-center justify-center flex-col mt-20 mb-4">
            <Image
                src="/icons/checkmark.jpg"
                width={150}
                height={150}
                alt="Your Order has been placed."
            />
            <h1 className="font-bold text-3xl uppercase text-black/80">
                Your Order has been placed
            </h1>
            <Link href="/" className="mt-5">
                <Button>Shop More</Button>
            </Link>
        </section>
    );
}

export default ThankYouPage;
