import { configureStore } from "@reduxjs/toolkit";
import favSlice from "../features/favSlice";
export const store = configureStore({
    reducer:{
        allfav:favSlice
    }
})