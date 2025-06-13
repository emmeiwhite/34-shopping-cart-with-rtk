import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="py-2 bg-amber-200">
      <nav className="max-w-5xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-sm font-medium">
          <h2 className="text-2xl font-bold text-green-600">Shopping Cart</h2>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            to="/"
            className="hover:underline text-sm font-medium">
            Home
          </Link>
          <Link
            to="/cart"
            className="hover:underline text-sm font-medium">
            Cart (0)
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
