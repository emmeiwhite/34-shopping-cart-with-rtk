import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://fakestoreapi.com/products'
const initialState = {
  loading: false,
  products: [],
  error: ''
}

// Step-1: Define the Async  Thunk
const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get(url)
  return response.data
})

// Step-2: Handle the Thunk in the Slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload // behind the scene createAsyncThunk gets data in payload on success
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

console.log(productSlice)

export default productSlice.reducer // internally in the console we see reducer with the function

export { fetchProducts } // We are exporting async-actions, so not the .actions this time
