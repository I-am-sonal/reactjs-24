import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
            //original state = {items: ['pizza']};
            clearCart: (state, action) => {
            // console.log(state); //['pizza'];it will show proxyobject (not show proper data)
            // console.log(current(state)); // hence use current(state)
            // state = [];
            //console.log(state);

            state.items.length = 0; // []
            //return {items: []}; // or you  can return and empty string.
            //this new object will be replaced inside original state = {items: []}
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;