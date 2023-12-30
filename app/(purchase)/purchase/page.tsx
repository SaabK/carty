import React from "react";
import Checkout from "./_components/Checkout";
import FormComponent from "./_components/Form";

function ProductBuyPage() {
    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 gap-16 my-6">
            <Checkout />
            <FormComponent />
        </section>
    );
}

export default ProductBuyPage;
