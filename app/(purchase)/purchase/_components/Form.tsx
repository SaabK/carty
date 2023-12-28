"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";

function FormComponent() {
    const { total } = useAppSelector((state) => state.checkout);

    return (
        <div>
            <h3 className="font-bold text-black/90 text-xl mb-4">
                Shipping Information
            </h3>

            <form className="flex flex-col gap-3">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className=" border-2 focus-visible:ring-0 focus-visible:border-0"
                    />
                </div>

                <div>
                    <Label htmlFor="name">Shipping Address</Label>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="rounded-b-none border-2 focus-visible:ring-0 focus-visible:border-0"
                    />
                    <Input
                        type="text"
                        id="state"
                        placeholder="State"
                        className="rounded-none border-y-0 border-2 focus-visible:ring-0 focus-visible:border-0"
                    />
                    <Input
                        type="text"
                        id="address"
                        placeholder="Address"
                        className="rounded-t-none border-2 focus-visible:ring-0 focus-visible:border-0"
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
                    />
                    <div className="flex">
                        <Input
                            type="text"
                            className=" focus-visible:ring-0 focus-visible:border-0 border-t-0 border-r-0 rounded-t-none rounded-r-none"
                            placeholder="MM / YY"
                        />
                        <Input
                            type="text"
                            placeholder="CVC"
                            className="rounded-l-none focus-visible:ring-0 focus-visible:border-0"
                        />
                    </div>
                </div>

                <Button>Pay Rs. {(total * 100).toLocaleString("en-US")}</Button>
            </form>
        </div>
    );
}

export default FormComponent;
