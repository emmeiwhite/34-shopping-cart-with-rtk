import { useDispatch } from 'react-redux'
import { removeFromCart, decrementQty, incrementQty } from '../features/cart/cartSlice'

function CartItem({ item }) {
  const { image, title, price, quantity, id } = item
  const dispatch = useDispatch()

  return (
    <div className="flex gap-4 border rounded-lg p-4 bg-white shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-28 h-28 object-contain"
      />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
          <p className="text-green-600 font-medium">${price}</p>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(decrementQty(id))}
              className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm font-medium transition">
              −
            </button>

            <span className="px-4 py-1 border rounded text-center">{quantity}</span>

            <button
              onClick={() => dispatch(incrementQty(id))}
              className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm font-medium transition">
              +
            </button>
          </div>

          <button
            className="px-4 py-2 bg-amber-300 text-gray-800 rounded hover:bg-amber-400 text-sm font-medium transition"
            onClick={() => dispatch(removeFromCart(id))}>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
