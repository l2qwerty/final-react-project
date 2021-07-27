/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartNumber: 0,
  cards: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.cards.some((item) => item.id === action.payload.id)) {
        state.cards.push({
          id: action.payload.id,
          amount: 1,
          coast: action.payload.coast,
        });
        state.cartNumber += 1;
      } else {
        state.cards.splice(
          state.cards
            .map((e) => {
              return e.id;
            })
            .indexOf(action.payload.id),
          1
        );
        state.cartNumber -= 1;
      }
    },
    addAmount: (state, action) => {
      state.cards.find((e) => e.id === action.payload.id).amount += 1;
      state.cards.find((e) => e.id === action.payload.id).coast =
        action.payload.coast *
        state.cards.find((e) => e.id === action.payload.id).amount;
    },
    degAmount: (state, action) => {
      state.cards.find((e) => e.id === action.payload.id).amount -= 1;
      state.cards.find((e) => e.id === action.payload.id).coast =
        action.payload.coast *
        state.cards.find((e) => e.id === action.payload.id).amount;
    },
    clearCart: (state) => {
      state.cards = [];
      state.cartNumber = 0;
    },
  },
});

export const { actions, reducer } = cartSlice;

export const { addToCart, addAmount, degAmount, clearCart } = cartSlice.actions;

export const selectCartNumber = (state) => state.cart.cartNumber;

export default cartSlice.reducer;
