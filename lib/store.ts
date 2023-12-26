import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import loadingReducer from "./features/loading/loadingSlice";
import cartReducer from "./features/cart/cartSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            search: productsReducer,
            loading: loadingReducer,
            cart: cartReducer,
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
