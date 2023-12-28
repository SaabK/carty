import React from "react";

interface CheckoutTotalProps {
    total: number;
}

function CheckoutTotal({ total }: CheckoutTotalProps) {
    return (
        <div className="flex justify-between items-center my-2">
            <span className="font-bold">Total Due: </span>
            <span className="font-bold text-lg">
                Rs. {(total * 100).toLocaleString("en-US")}
            </span>
        </div>
    );
}

export default CheckoutTotal;
