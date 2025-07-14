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
        },
        addToCart: (state, action) => {
            const phone = action.payload;
            const newCart = [...state.carts];
            const index = newCart.findIndex((item) => item.maSP === phone.maSP);
            if (index === -1) {
                newCart.push({ ...phone, soLuong: 1 });
            }
            else {
                newCart[index].soLuong += 1;
            }
            state.carts = newCart;
        },
        updateQuantity: (state, action) => {

            const newCart = state.carts.map((item) => {
                if (item.maSP !== action.payload.maSP) return item;
                return {
                    ...item,
                    soLuong: item.soLuong + action.payload.quantity
                };
            });
            state.carts = newCart;
        },
        deleteProduct: (state, action) => {
            const maSP = action.payload;
            const newCart = [...state.carts];
            state.carts = newCart.filter((item) => item.maSP !== maSP);
        }
    },
})
export const { setDetailProduct, addToCart, updateQuantity, deleteProduct } = shoppingPhoneSlice.actions; //actions là thuộc tính
export const shoppingPhoneReducer = shoppingPhoneSlice.reducer;