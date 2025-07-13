import { createSlice } from "@reduxjs/toolkit";
import data from "./../shopping-phone-redux/data.json";

const initialState = {
    listProduct: data,
    productDetail: data[0],
    carts: [],
}
const shoppingPhoneSlice = createSlice({
    name: "shoppingPhoneSlice",
    initialState,
    reducers: {
        setDetailProduct: (state, action) => {
            // console.log(action);
            state.productDetail = action.payload;
        }
    },
})
export const { setDetailProduct } = shoppingPhoneSlice.actions; //actions là thuộc tính
export const shoppingPhoneReducer = shoppingPhoneSlice.reducer;