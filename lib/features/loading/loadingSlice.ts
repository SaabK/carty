import { loadingState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: loadingState = {
    progress: 0,
};

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        adjustProgress: (state, action: PayloadAction<number>) => {
            state.progress = action.payload;
        },
    },
});

export const { adjustProgress } = loadingSlice.actions;

export default loadingSlice.reducer;
