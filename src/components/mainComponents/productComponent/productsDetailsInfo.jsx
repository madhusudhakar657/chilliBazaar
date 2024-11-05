import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductCard() {
    const location = useLocation();
    const product = location.state;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      {/* Product Image Placeholder */}
      <div className="h-48 bg-red-200 flex items-center justify-center">
        <img
          src={product.imageUrl || "https://via.placeholder.com/150"}
          alt={product.name}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name and Variety */}
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">Variety: {product.variety}</p>

        {/* Price and Availability */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-red-600 font-bold">₹{product.pricePerKg} / Kg</span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              product.availability === "In Stock"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {product.availability}
          </span>
        </div>

        {/* State and Special Features */}
        <p className="mt-2 text-sm text-gray-600">State: {product.state}</p>
        <p className="text-sm text-gray-600">Features: {product.specialFeatures}</p>

        {/* Spicy Level and Moisture Content */}
        <div className="mt-2 flex items-center">
          <span className="text-sm text-gray-500">Spicy Level: {product.spicyLevel}</span>
          <span className="ml-4 text-sm text-gray-500">Moisture: {product.moistureContent}</span>
        </div>

        {/* Supplier Info */}
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-700">Supplier: {product.supplier}</p>
          <p className="text-sm text-gray-500">{product.supplierAddress}</p>
          <p className="text-sm text-gray-500">Contact: {product.contactNumber}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center justify-between">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-500">
            Add to Cart
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-red-600 border border-red-600 rounded hover:bg-red-50">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
