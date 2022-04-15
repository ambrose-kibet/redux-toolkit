import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = { cartItems: [], amount: 5, total: 0, isLoading: true };
export const getItems = createAsyncThunk(
  "cart/getItems",
  async (_, thunkAPI) => {
    try {
      const resp = axios(url);
      return (await resp).data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue("something went wrong").payload);
    }
  }
);
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (action.payload === item.id) {
          item.amount += 1;
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.cartItems = state.cartItems
        .map((item) => {
          if (action.payload === item.id) {
            item.amount -= 1;
          }
          return item;
        })
        .filter((item) => item.amount > 0);
    },
    getTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getItems.pending]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { clearCart, removeItem, increase, decrease, getTotals } =
  cart.actions;
export default cart.reducer;
