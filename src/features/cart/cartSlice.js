import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload

      const existing = state.cart.find(item => item.id === product.id)

      if (existing) {
        existing.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload

      state.cart = state.cart.filter(item => item.id !== id)
    },
    incrementQty: (state, action) => {
      const id = action.payload

      const item = state.cart.find(item => item.id === id)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQty: (state, action) => {
      const id = action.payload

      const item = state.cart.find(item => item.id === id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    clearAll: state => {
      state.cart = []
    }
  }
})

console.log(cartSlice)

// export reducer and actions creators from actions object (console.log(cartSlice) to rescue)
export const cartReducer = cartSlice.reducer
export const { addToCart, removeFromCart, incrementQty, decrementQty, clearAll } = cartSlice.actions
