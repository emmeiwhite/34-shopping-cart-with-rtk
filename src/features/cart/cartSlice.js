import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      if (!product || !product.id) {
        console.warn('Invalid product payload for addToCart:', product)
        return
      }

      const existing = state.cart.find(product => product.id === action.payload.id)

      if (existing) {
        existing.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    }
  }
})

console.log(cartSlice)

// export reducer and actions creators from actions object (console.log(cartSlice) to rescue)
export const cartReducer = cartSlice.reducer
export const { addToCart } = cartSlice.actions
