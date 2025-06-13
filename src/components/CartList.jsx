import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

function CartList() {
  const { cart } = useSelector(state => state.cart)

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0)

  // When there are no items in the cart
  if (cart.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-amber-300 text-gray-800 rounded hover:bg-amber-400 text-sm font-medium transition">
          ← Back to Shopping
        </Link>
      </div>
    )
  }

  // When the user has added some products
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 mt-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Cart Items</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* Total + Back Button */}
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-semibold text-gray-800">Total: ${totalPrice}</p>
        <Link
          to="/"
          className="px-4 py-2 bg-amber-300 text-gray-800 rounded hover:bg-amber-400 text-sm font-medium transition">
          ← Back to Shopping
        </Link>
      </div>
    </div>
  )
}

export default CartList
