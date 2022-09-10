import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {

            // find the first (only one) item; 
            const index = state.items.findIndex(item => item.id === action.payload.id);

            // copy state
            let newBasket = [...state.items]; 

            // if there such an item only delete that index form items array 
            if(index >= 0){
                newBasket.splice(index, 1)
            } else {
                console.warn(`${action.payload.id} does not exist`)
            }

            // return updated items
            state.items = newBasket; 
        }
    }
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = state => state.basket.items; 

// export times based on id
export const selectBasketItemsById = (state, id) => state.basket.items.filter((item) => item.id === id);

// export total price in basket
export const selectBasketTotal = state => state.basket.items.reduce((total, item) => total += item.price, 0);

// export reducer for store
export default basketSlice.reducer;