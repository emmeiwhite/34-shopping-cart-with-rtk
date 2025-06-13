import { useEffect } from 'react'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice'
import ProductSkeleton from './ProductSkeleton'
import ErrorMessage from './ErrorMessage'

function ProductList() {
  const { loading, error, products } = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts()) // async actions with createAsyncThunk
  }, [dispatch])

  if (loading)
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
        {[...Array(6)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    )
  if (error) return <ErrorMessage message={error} />

  return (
    <section className="py-6">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">All Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductItem
              key={p.id}
              product={p}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProductList
