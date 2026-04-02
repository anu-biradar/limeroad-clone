const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl p-3 shadow hover:shadow-lg transition">
      <img
        src={product.img1}
        alt={product.title}
        className="h-52 w-full object-cover rounded-md"
      />

      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-500 text-sm">{product.brand}</p>

      <div className="flex justify-between items-center mt-2">
        <p className="font-bold">₹{product.price}</p>
        <button className="bg-black text-white px-3 py-1 rounded">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;