// import React from 'react';
// import { useParams } from 'react-router-dom';

// Mock Product Data
const productData = {
  id: 1,
  name: 'Guntur Sannam',
  features: 'High pungency, rich red color',
  quality: 'A+',
  price: '120/kg',
  availability: 'In Stock',
  location: 'Andhra Pradesh',
  description: 'Guntur Sannam chilies are known for their high pungency and vibrant color, often used in spice blends and sauces to add heat and color.',
  images: [
    'https://via.placeholder.com/300x200', // Replace with actual image URLs
    'https://via.placeholder.com/300x200'
  ],
  rating: 4.5
};

const ProductDetails = () => {
//   const { id } = useParams();
  
  // For real data, fetch based on `id` using API
  const product = productData;

  return (
    <div className="bg-white p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{product.name}</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Image Gallery */}
        <div className="flex lg:w-1/2 space-x-4">
          {product.images.map((src, index) => (
            <img key={index} src={src} alt={product.name} className="rounded-lg shadow-lg w-full" />
          ))}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 space-y-4">
          <p className="text-lg text-gray-800">{product.description}</p>
          <p className="text-xl text-gray-700"><span className="font-semibold text-red-600">Quality:</span> {product.quality}</p>
          <p className="text-xl text-gray-700"><span className="font-semibold text-red-600">Price:</span> {product.price}</p>
          <p className="text-xl text-gray-700"><span className="font-semibold text-red-600">Availability:</span> {product.availability}</p>
          <p className="text-xl text-gray-700"><span className="font-semibold text-red-600">Location:</span> {product.location}</p>
          <p className="text-xl text-gray-700"><span className="font-semibold text-red-600">Rating:</span> {product.rating} ⭐</p>
          
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">Add to Cart</button>
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
