// import React from 'react';

const RegionsComponent = () => {
  return (
    <div className="bg-none w-auto mt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-10">
          Popular Chili-Producing Regions in India
        </h1>
        
        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Guntur, Andhra Pradesh */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Guntur, Andhra Pradesh</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Variety:</span> Guntur Sannam
            </p>
            <p className="text-gray-700">
              Known for its high pungency, Guntur Sannam chilies are favored in spicy dishes. This variety is often used in powders and sauces, delivering intense heat and vibrant red color.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Special Feature:</span> Intense heat and rich red color.
            </p>
          </div>

          {/* Byadgi, Karnataka */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Byadgi, Karnataka</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Variety:</span> Byadgi Chili
            </p>
            <p className="text-gray-700">
              Famous for its deep red color and mild heat, Byadgi chili is often used for adding color rather than spiciness. It is a preferred choice in curry powders and spice blends.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Special Feature:</span> Deep color and low pungency.
            </p>
          </div>

          {/* Ramnad, Tamil Nadu */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Ramnad, Tamil Nadu</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Variety:</span> Ramnad Mundu
            </p>
            <p className="text-gray-700">
              Known for its round shape and medium heat, the Ramnad Mundu is often used in South Indian cuisine. It adds a distinctive flavor and is ideal for sambhar and chutneys.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Special Feature:</span> Unique round shape and tangy flavor.
            </p>
          </div>

          {/* Kashmir */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Kashmir</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Variety:</span> Kashmiri Chili
            </p>
            <p className="text-gray-700">
              Known for its bright color and low heat, Kashmiri chili is ideal for dishes needing vibrant color without too much spiciness. It’s a popular choice for tandoori recipes and rich curries.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Special Feature:</span> Bright red color, mild heat.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Kashmir</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Variety:</span> Kashmiri Chili
            </p>
            <p className="text-gray-700">
              Known for its bright color and low heat, Kashmiri chili is ideal for dishes needing vibrant color without too much spiciness. It’s a popular choice for tandoori recipes and rich curries.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Special Feature:</span> Bright red color, mild heat.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Kashmir</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Variety:</span> Kashmiri Chili
            </p>
            <p className="text-gray-700">
              Known for its bright color and low heat, Kashmiri chili is ideal for dishes needing vibrant color without too much spiciness. It’s a popular choice for tandoori recipes and rich curries.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Special Feature:</span> Bright red color, mild heat.
            </p>
          </div>


          {/* Mathania, Rajasthan */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Mathania, Rajasthan</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Variety:</span> Mathania Red Chili
            </p>
            <p className="text-gray-700">
              Mathania chilies are widely appreciated for their sharp flavor and moderate heat. They’re popular in Rajasthani dishes and lend a deep flavor without overwhelming spiciness.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Special Feature:</span> Balanced spiciness and rich flavor.
            </p>
          </div>

          {/* Teja, Andhra Pradesh */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Teja, Andhra Pradesh</h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Variety:</span> Teja Chili
            </p>
            <p className="text-gray-700">
              Teja chilies are among the hottest varieties grown in India and are often used in spicy sauces and chili powders. They’re known for their heat and deep red color.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold text-red-600">Special Feature:</span> High heat and bold color.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionsComponent;
