// import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock Data - Replace with actual API or database data
const products = [
  { id: 1, name: 'Guntur Sannam', features: 'High pungency, rich red color', price: '120/kg', availability: 'In Stock', location: 'Andhra Pradesh' },
  { id: 2, name: 'Byadgi Chili', features: 'Deep color, mild heat', price: '100/kg', availability: 'Limited', location: 'Karnataka' },
  // Add more products as needed
];

const Products = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen mt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-10">Explore Our Chili Varieties</h1>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="mt-2 text-gray-700"><span className="font-semibold text-red-600">Features:</span> {product.features}</p>
              <p className="mt-2 text-gray-700"><span className="font-semibold text-red-600">Price:</span> {product.price}</p>
              <p className="mt-2 text-gray-700"><span className="font-semibold text-red-600">Availability:</span> {product.availability}</p>
              <p className="mt-2 text-gray-700"><span className="font-semibold text-red-600">Location:</span> {product.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
