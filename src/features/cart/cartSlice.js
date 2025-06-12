import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
      state.cartItem++
    }
  }
})

console.log(cartSlice)

// export reducer and actions creators from actions object (console.log(cartSlice) to rescue)
export const cartReducer = cartSlice.reducer
export const { addToCart } = cartSlice.actions
