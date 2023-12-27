import { CartItem, CartState, product } from "@/types";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: CartState = {
    cart:
        (typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("cart") as string)) ||
        [],
    price: 0,
    noOfItems: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (
            state,
            {
                payload: { product, quantity = 1 },
            }: { payload: { product: product; quantity?: number } }
        ) => {
            // Directly store all the data in redux instead of storing Ids in here and then creating another async thunk to fetch that data. Also becuase I will convert all the fetch functions in redux ones. Period.

            const thatOneItem: CartItem = state.cart.find(
                (item) => item.product.id == product.id
            )!;
            if (thatOneItem) {
                thatOneItem.quantity = thatOneItem.quantity + quantity;
            } else {
                state.cart.push({
                    product: product,
                    quantity: quantity,
                });
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        calculateTotal: (state) => {
            const total = state.cart.reduce(
                (acc, curr) => acc + curr.product.price * curr.quantity,
                0
            );

            state.price = total;
        },

        calculateQuantity: (state) => {
            const quantity = state.cart.reduce((acc, curr) => {
                return acc + curr.quantity;
            }, 0);

            state.noOfItems = quantity;
        },

        incrementQuantity: (state, action) => {
            // Action.payload will be id

            const thatOneItem = state.cart.find(
                (item) => item.product.id == action.payload
            );
            if (thatOneItem) thatOneItem.quantity = thatOneItem?.quantity + 1;

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        decrementQuantity: (state, action) => {
            // Action.payload will be id

            const thatOneItem = state.cart.find(
                (item) => item.product.id == action.payload
            );
            if (thatOneItem) thatOneItem.quantity = thatOneItem?.quantity - 1;

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        deleteItem: (state, action) => {
            const thatOneItem = state.cart.find(
                (item) => item.product.id == action.payload
            );

            if (!thatOneItem) return;

            state.cart = state.cart.filter(
                (item) => item.product.id != action.payload
            );

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
});

export const {
    addToCart,
    calculateTotal,
    calculateQuantity,
    incrementQuantity,
    decrementQuantity,
    deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
