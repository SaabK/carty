import { URL } from "@/data";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSpecificProducts = createAsyncThunk(
    "cart/fetchSpecificProducts",
    async (ids: string[]) => {
        const products = ids.map(async (id) => {
            const response = await axios.get(`${URL}/${id}`);
            const product = await response.data;

            console.log("Each Product: ", product);
            return product;
        });

        console.log("All the products: ", products);
    }
);
