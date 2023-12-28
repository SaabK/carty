"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

function FormComponent() {
    const { total } = useAppSelector((state) => state.checkout);
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        state: "",
        address: "",
        card: "",
        expiryDate: "",
        cvc: undefined,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "card") {
            setFormData({
                ...formData,
                card: e.target.value
                    .replace(/\s?/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim(),
            });

            return;
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        console.log(e.target.name);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.address ||
            !formData.card ||
            !formData.cvc ||
            !formData.email ||
            !formData.expiryDate ||
            !formData.state
        )
            return;

        router.push("/thank-you");
    };

    return (
        <div>
            <h3 className="font-bold text-black/90 text-xl mb-4">
                Shipping Information
            </h3>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className=" border-2 focus-visible:ring-0 focus-visible:border-0"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label htmlFor="name">Shipping Address</Label>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="rounded-b-none border-2 focus-visible:ring-0 focus-visible:border-0"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        id="state"
                        placeholder="State"
                        className="rounded-none border-y-0 border-2 focus-visible:ring-0 focus-visible:border-0"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        id="address"
                        placeholder="Address"
                        className="rounded-t-none border-2 focus-visible:ring-0 focus-visible:border-0"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <h4 className="font-bold text-black/90 text-lg my-2  focus-visible:ring-0 focus-visible:border-0">
                    Shipping Information
                </h4>

                <div>
                    <Label htmlFor="card">Card Information</Label>
                    <Input
                        type="text"
                        id="card"
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="focus-visible:ring-0 focus-visible:border-0 rounded-b-none"
                        name="card"
                        value={formData.card}
                        onChange={handleChange}
                    />
                    <div className="flex">
                        <Input
                            type="text"
                            className=" focus-visible:ring-0 focus-visible:border-0 border-t-0 border-r-0 rounded-t-none rounded-r-none"
                            placeholder="MM / YY"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="CVC"
                            className="rounded-l-none focus-visible:ring-0 focus-visible:border-0"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <Button type="submit">
                    Pay Rs. {(total * 100).toLocaleString("en-US")}
                </Button>
            </form>
        </div>
    );
}

export default FormComponent;
