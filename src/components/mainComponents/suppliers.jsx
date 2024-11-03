import React from 'react';
import MirchiCard from './mirchiCard';

const popularMirchiVarieties = [
  {
    id: 1,
    state: 'Andhra Pradesh',
    variety: 'Guntur Chilli',
    specialty: 'Known for its high spiciness',
    minPrice: 80,
    maxPrice: 150,
  },
  {
    id: 2,
    state: 'Rajasthan',
    variety: 'Mathania Chilli',
    specialty: 'Famous for its vibrant red color',
    minPrice: 100,
    maxPrice: 180,
  },
  // Add more items as needed
];

const allVarietiesByState = [
  {
    state: 'Andhra Pradesh',
    varieties: [
      { id: 101, name: 'Guntur Chilli', minPrice: 80, maxPrice: 150 },
      { id: 102, name: 'Byadgi Chilli', minPrice: 70, maxPrice: 130 },
    ],
  },
  {
    state: 'Rajasthan',
    varieties: [
      { id: 103, name: 'Mathania Chilli', minPrice: 100, maxPrice: 180 },
      { id: 104, name: 'Jodhpur Chilli', minPrice: 90, maxPrice: 160 },
    ],
  },
  // Add more states as needed
];

const SuppliersPage = () => {
  return (
    <div className="bg-red-200 mt-20 min-h-screen"
//   style={{backgroundImage:`url('/mirchiTypes/vintage-pepper-illustration-food-restaurant-theme-generative-ai_804788-187844.jpg')`}}
    >
      {/* Header */}
      <header 
       style={{backgroundImage:`url('mirchiTypes/vintage-pepper-illustration-food-restaurant-theme-generative-ai_804788-187844.jpg')`}}

      className="bg-red-600 bg-cover bg-center text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Suppliers Across India</h1>
        <p className="mt-2 text-lg">Explore high-quality dried chilies from trusted suppliers across different states in India.</p>
      </header>

      {/* Popular Mirchi Varieties Section */}
      <section 
      className="bg-red-200 mt-12 mx-auto px-8 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular Mirchi Varieties by State</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularMirchiVarieties?.map((mirchi) => (
             <MirchiCard key={mirchi?.id} mirchi={mirchi} />
          ))}
        </div>
      </section>

      {/* All Varieties by State Section */}
      <section className="mx-auto px-8 py-8">
        <h2 className="text-2xl font-semibold text-center before: text-gray-800 mb-6">All Varieties by State</h2>
        {allVarietiesByState.map((stateData) => (
          <div key={stateData.state} className="mb-8">
            <h3 className="text-xl font-bold text-red-700 mb-4">{stateData.state}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateData.varieties.map((variety) => (
                <div key={variety.id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                  <h4 className="text-lg font-semibold">{variety.name}</h4>
                  <p className="mt-2">Min Price: ₹{variety.minPrice}</p>
                  <p>Max Price: ₹{variety.maxPrice}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SuppliersPage;
