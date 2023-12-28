import { CartItem, CheckoutState } from "@/types";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: CheckoutState = {
    productsToBuy: [],
    total: 0,
    info: {},
};

export const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        productsToPurchase: (state, { payload }: { payload: CartItem[] }) => {
            // action.payload will contain all the products or the single product
            // If no product is in the productToBuy State then redirect from buy page

            state.productsToBuy = payload;
        },

        calculateTotal: (state) => {
            const total = state.productsToBuy.reduce(
                (acc, curr) => acc + curr.product.price * curr.quantity,
                0
            );

            state.total = total;
        },

        incrementQuantity: (state, action) => {
            // Action.payload will be id

            const thatOneItem = state.productsToBuy.find(
                (item) => item.product.id == action.payload
            );
            if (thatOneItem) thatOneItem.quantity = thatOneItem?.quantity + 1;

            console.log("Work?");
        },

        decrementQuantity: (state, action) => {
            // Action.payload will be id

            const thatOneItem = state.productsToBuy.find(
                (item) => item.product.id == action.payload
            );
            if (thatOneItem) thatOneItem.quantity = thatOneItem?.quantity - 1;
        },
    },
});

export const {
    productsToPurchase,
    calculateTotal,
    incrementQuantity,
    decrementQuantity,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
