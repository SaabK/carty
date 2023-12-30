import { productsState } from "@/types";
import { createSlice, current } from "@reduxjs/toolkit";
import { fetchProductsBySearch } from "./productsThunk";

const initialState: productsState = {
    products: [],
    status: "idle",
    error: null,
    searchHistory:
        (typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("searchHistory") as string)) ||
        [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addSearchHistory: (state, { payload }: { payload: string }) => {
            // action.payload is a string that contains the searchTerm
            let doesExist = false;

            state.searchHistory = state.searchHistory.filter((item) => {
                if (item === payload) {
                    doesExist = true;
                }
                return item !== payload;
            });

            state.searchHistory.push(payload);

            if (doesExist) return;

            // But I want only the 7 latest strings to stay in searchHistory.
            if (state.searchHistory.length > 7) {
                state.searchHistory.shift();
            }

            localStorage.setItem(
                "searchHistory",
                JSON.stringify(state.searchHistory)
            );
        },

        removeSearchHistory: (state) => {
            state.searchHistory = [];

            localStorage.setItem(
                "searchHistory",
                JSON.stringify(state.searchHistory)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsBySearch.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductsBySearch.fulfilled, (state, action) => {
                state.products = action.payload.products;
            })
            .addCase(fetchProductsBySearch.rejected, (state) => {
                state.error =
                    "An error occurred while fetch products by search";
            });
    },
});

export const { addSearchHistory, removeSearchHistory } = productsSlice.actions;

export default productsSlice.reducer;
