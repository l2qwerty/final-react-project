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
      if (!state.cards.some((item) => item.id === action.payload)) {
        state.cards.push({ id: action.payload, amount: 1 });
        state.cartNumber += 1;
      } else {
        state.cards.splice(
          state.cards
            .map((e) => {
              return e.id;
            })
            .indexOf(action.payload),
          1
        );
        state.cartNumber -= 1;
      }
    },
    addCount: (state, action) => {
      state.cards.find((e) => e.id === action.payload).amount += 1;
    },
    degCount: (state, action) => {
      state.cards.find((e) => e.id === action.payload).amount -= 1;
    },
  },
});

export const { actions, reducer } = cartSlice;

export const { addToCart, addCount, degCount } = cartSlice.actions;

export const selectCartNumber = (state) => state.cart.cartNumber;

export default cartSlice.reducer;
