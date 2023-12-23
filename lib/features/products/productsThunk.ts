import { URL } from "@/data";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsBySearch = createAsyncThunk(
    "products/fetchProductsBySearch",
    async (query: string) => {
        const response = await axios.get(`${URL}/search?q=${query}`);
        const products = await response.data;

        return products;
    }
);
