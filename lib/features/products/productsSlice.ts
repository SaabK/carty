import { productsState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsBySearch } from "./productsThunk";

const initialState: productsState = {
    products: [],
    status: "idle",
    error: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsBySearch.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductsBySearch.fulfilled, (state, action) => {
                state.products = action.payload.products;
                console.log(state.products);
            })
            .addCase(fetchProductsBySearch.rejected, (state) => {
                state.error =
                    "An error occurred while fetch products by search";
            });
    },
});

// export const { search } = productsSlice.actions;

export default productsSlice.reducer;
