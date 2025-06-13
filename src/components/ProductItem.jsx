import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

function ProductItem({ product }) {
  const { id, title, image, price, rating } = product

  const dispatch = useDispatch()

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col justify-between">
      <a href={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-contain mb-3 transition-transform duration-300 hover:scale-105"
        />
      </a>
      <h4 className="text-sm font-semibold mb-1 text-gray-800 line-clamp-2">{title}</h4>
      <p className="text-base font-bold text-green-500">${price}</p>
      <p className="text-xs text-gray-600">
        ⭐ {rating.rate} ({rating.count})
      </p>
      <button
        className="mt-4 py-2 px-3 bg-amber-300 hover:bg-amber-400 text-gray-800 rounded transition cursor-pointer"
        onClick={dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductItem
