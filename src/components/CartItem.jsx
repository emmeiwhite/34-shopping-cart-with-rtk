function CartItem({ item }) {
  const { image, title, price, quantity } = item

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
          <input
            type="number"
            value={quantity}
            min={1}
            className="w-16 border px-2 py-1 rounded text-center"
          />
          <button className="px-4 py-2 bg-amber-300 text-gray-800 rounded hover:bg-amber-400 text-sm font-medium transition">
            Update
          </button>
          <button className="px-4 py-2 bg-amber-300 text-gray-800 rounded hover:bg-amber-400 text-sm font-medium transition">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
