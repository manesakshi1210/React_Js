export default function Card() {
  return (
    <div className=" bg-gray-100 flex justify-center items-center gap-6 flex-wrap p-6">

      {/* Card 1 */}
      <div className="w-64 bg-white p-4 rounded-lg shadow-lg">

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Product"
          className="w-full h-40 object-cover rounded"
        />

        <h2 className="font-bold mt-3">
          Running Shoes
        </h2>

        <p className="text-gray-600 mt-2">
          High quality product with modern design.
        </p>

        <h3 className="mt-2 text-green-600">
          ₹999
        </h3>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Add to Cart
        </button>

      </div>

      {/* Card 2 */}
      <div className="w-64 bg-white p-4 rounded-lg shadow-lg">

        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
          alt="Product"
          className="w-full h-40 object-cover rounded"
        />

        <h2 className="font-bold mt-3">
          Sneakers
        </h2>

        <p className="text-gray-600 mt-2">
          Stylish sneakers for daily wear.
        </p>

        <h3 className="mt-2 text-green-600">
          ₹1299
        </h3>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Add to Cart
        </button>

      </div>

      {/* Card 3 */}
      <div className="w-64 bg-white p-4 rounded-lg shadow-lg">

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Product"
          className="w-full h-40 object-cover rounded"
        />

        <h2 className="font-bold mt-3">
          Smart Watch
        </h2>

        <p className="text-gray-600 mt-2">
          Modern smartwatch with cool features.
        </p>

        <h3 className="mt-2 text-green-600">
          ₹1999
        </h3>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Add to Cart
        </button>

      </div>

    </div>
  )
}