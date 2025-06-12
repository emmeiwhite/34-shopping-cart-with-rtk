import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://fakestoreapi.com/products'
const initialState = {
  loading: false,
  products: [],
  error: ''
}

// Step-1: Define the Async  Thunk
createAsyncThunk('product/fetchProducts', () => {
  return axios.get(url).then(res => res.data)
})

const productSlice = createSlice({
  name: 'product',
  initialState
})

console.log(productSlice)
