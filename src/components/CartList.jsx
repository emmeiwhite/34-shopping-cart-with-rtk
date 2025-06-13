import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const dummyCart = [
  {
    id: 1,
    title: 'Mens Cotton Jacket',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    price: 55.99,
    quantity: 2
  },
  {
    id: 2,
    title: 'Mens Casual T-Shirt',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    price: 22.3,
    quantity: 1
  }
]

// Calculate total
const getTotal = items =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

function CartList() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 mt-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Cart Items</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {dummyCart.map(item => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* Total + Back Button */}
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-semibold text-gray-800">Total: ${getTotal(dummyCart)}</p>
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
