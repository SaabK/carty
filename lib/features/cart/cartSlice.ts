import { CartState } from "@/types";
import { createSlice, current } from "@reduxjs/toolkit";
import { fetchSpecificProducts } from "./cartThunk";

const initialState: CartState = {
    cart:
        (typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("cart") as string)) ||
        [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload: { id, quantity = 1 } }) => {
            const thatOneItem = state.cart.find((item) => item.id == id);
            if (thatOneItem) {
                thatOneItem.quantity = thatOneItem.quantity + quantity;
            } else {
                state.cart.push({
                    id,
                    quantity,
                });
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));

            console.log("After: ", current(state.cart));
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchSpecificProducts.fulfilled, (state, action) => {
            console.log("State from Cart Extra Reducer: ", state.cart);
            console.log(
                "Action Payload from Cart Extra Reducer: ",
                action.payload
            );
        });
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
