import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            console.log(state);
        },
        removeFromCart(state, action) {
            state.splice(action.payload,1);
        },
        addToWishList(state, action) {},
        removeFromWishList(state, action) {},
    }
});

export const { addToCart, removeFromCart, addToWishList, removeFromWishList } = productSlice.actions;
export default productSlice;
