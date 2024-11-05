import { useEffect, useState } from 'react';

const results = [
      { id: 1, name: 'Guntur Red Chili', location: 'Andhra Pradesh', price: '₹500/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      { id: 2, name: 'Kashmiri Red Chili', location: 'Kashmir', price: '₹700/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      { id: 3, name: 'Byadgi Red Chili', location: 'Karnataka', price: '₹600/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      { id: 4, name: 'Guntur Red Chili', location: 'Andhra Pradesh', price: '₹500/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      { id: 5, name: 'Kashmiri Red Chili', location: 'Kashmir', price: '₹700/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      { id: 6, name: 'Byadgi Red Chili', location: 'Karnataka', price: '₹600/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      { id: 7, name: 'Guntur Red Chili', location: 'Andhra Pradesh', price: '₹500/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      { id: 8, name: 'Kashmiri Red Chili', location: 'Kashmir', price: '₹700/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      { id: 9, name: 'Byadgi Red Chili', location: 'Karnataka', price: '₹600/kg',  image: "mirchiTypes/gunturSannam.jpg", },
      // Add more results as needed
    ];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


//   useEffect(()=>{

//   },[]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Mock API call or use real API integration here
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-red-200">
      {/* Search Bar */}
      <div style={{ backgroundImage: `url('public/assets/pile-pepper-pepper-chili-wooden-table_1049143-28188.jpg` }}
      className="bg-center bg-cover w-full p-8 pt-28">
        <form onSubmit={handleSearch} className="flex justify-center w-full flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for Mirchi products..."
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      {/* Search Results */}
      <div className="min-h-screen flex flex-col justify-start items-start p-16">
        {searchResults?.length ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults?.map((product) => (
              <div key={product.id} className="w-full bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-700">{product.location}</p>
                  <p className="text-red-600 font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-3  xl font-semibold text-gray-700 mt-10">No products found. Please search for available products.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
