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
          <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded">
            Update
          </button>
          <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
