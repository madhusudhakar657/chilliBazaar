import { useState } from 'react';
import { FaArrowRight, FaLocationArrow, FaMapMarked, FaMapMarker, FaRegMoneyBillAlt, FaSearchLocation, FaShippingFast } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { chiliVarieties, mirchiData } from '../../staticJsonData';
import { RiH2 } from 'react-icons/ri';

const HomePage = () => {
  const [chilliTypes, setChilliTypes] = useState(chiliVarieties);
  return (
    <div className="font-sans">
      {/* Hero Banner */}
      <section
        className="w-screen bg-cover bg-center h-screen flex flex-col items-center justify-center z-1"
        style={{ backgroundImage: `url('assets/top-view-indian-seasonings-dried-peppers-table.jpg` }}
      >
        <div className="bg-black border border-gray-600 bg-opacity-60 mt-20 p-10 rounded-lg text-center animate-fadeIn">
          <h1 className="font-bold z-1 text-white mb-4">Welcome to <strong className='text-red-600'> Chilli Bazaar</strong></h1>
          <h3 className="text-4xl font-bold text-white mb-6">
            Premium Dried <strong className='text-red-600'>Red Chilies</strong> Delivered to Your Doorstep
          </h3>
          <p className="text-lg text-gray-100 leading-relaxed">
            We bring you the finest selection of dried red chilies, sourced from farmers across India. From home cooks to professional chefs, we cater to all with premium-quality chilies.
          </p>
          <p className="text-lg text-gray-100">
            Explore the authentic spice of India
          </p>
          <Link to="/products">
            <button className="mt-6 px-8 py-2 bg-white text-red-600 z-10 font-bold rounded-lg hover:bg-red-700 hover:text-white transition">
              Shop Now <FaArrowRight className="inline ml-2" />
            </button>
          </Link>

        </div>
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-28">
          <div className="w-vw bg-red-600 text-white p-8 rounded-lg text-center hover:bg-red-700 ">
            <h3 className="text-2xl font-semibold mb-3">Selling Dried Chilies?</h3>
            <p>Join us to sell your high-quality dried chilies directly to buyers worldwide.</p>
            <Link to="/selling">
              <button className="mt-4 px-6 py-2 bg-white text-red-600 font-semibold rounded hover:bg-gray-100">
                Start Selling <FaRegMoneyBillAlt className="inline ml-2" />
              </button>
            </Link>
          </div>
          <div className="w-vw bg-green-600 text-white p-8 rounded-lg text-center hover:bg-green-700 ">
            <h3 className="text-2xl font-semibold mb-3">Looking to Buy?</h3>
            <p>Explore a wide variety of dried chilies from trusted sources at the best prices.</p>
            <Link to="/products">
              <button className="mt-4 px-6 py-2 bg-white text-green-600 font-semibold rounded hover:bg-gray-100">
                Start Buying <FaShippingFast className="inline ml-2" />
              </button>
            </Link>

          </div>
        </section>
      </section>

      {/* Introduction Section */}
      <main className=" w-screen mt-12">

        {/* <section style={{ backgroundImage: `url('""assets/red-chili-peppers-black-stone-background_1286611-2027.jpg')` }}
          className="bg-cover bg-bottom w-full py-8 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Daily Mirchi Prices</h3>
          
            <div className=" grid md:grid-cols-3 pb-8 mx-8 gap-6">
              {mirchiData?.map(each => {
                return (
                  <div key={each?.id} className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-xl font-semibold text-gray-800">{each?.popularVariety}</h4>
                    <p>{each?.specialty}</p>
                    <p className="text-gray-600 mt-2">Price: ₹500/kg</p>
                  </div>
                )
              })

              }
            </div>
        </section> */}
        <section style={{ backgroundImage: `url('assets/spice-smoked-paprika-form-powder-bowls-spoons_73989-34358.jpg')` }}
          className="bg-cover bg-center bg-bottom w-full px-16 py-8 mb-12">
          <h3 className="text-4xl font-bold text-white pt-4 mb-6 text-center">Popular <strong className='text-red-600'>Dry Chilli</strong> Varieties Across India</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 animate-slideLeft">
            {chilliTypes?.map(eachType => {

              return (<div key={eachType?.name} className=" bg-white min-w-full shadow-lg ml-0 rounded-lg">
                <img
                  src={eachType?.image}
                  alt={eachType?.name}
                  className="h-52 w-full p-0 object-cover rounded-lg mb-4"
                />
                <div className='p-4'>
                  <div className='flex justify-between items-center'>
                    <h4 className="text-2xl text-start font-semibold text-red-600">{eachType?.name}</h4>
                    <div className='flex'>
                      <span className='mt-1 mr-1'><FaMapMarker /></span>
                      <p className='w-auto'>{eachType?.location.split(",")[0]}</p>
                    </div>
                  </div>

                  <p className="text-gray-900 h-24 text-sm py-4">
                    {eachType?.description}
                  </p>
                  <div className='flex justify-around'>
                    <p className='w-auto font-semibold text-orange-800'>Min-Price: <span className='font-semibold text-lg font-sans text-black'>Rs 100/kg</span></p>
                    <p className='w-auto font-semibold text-green-800'>Max-Price: <span className=' font-semibold text-lg font-sans text-black'>Rs 200/kg</span></p>

                  </div>
                  <div className='flex justify-around my-5'>
                    <button
                      className="bg-white py-2 text-lg border-2 border-red-600 text-red-600 px-6 my-2 rounded hover:bg-orange-600 hover:border-none hover:text-white"
                    >Add to Cart
                    </button>
                    <button
                      className="bg-white text-lg text-green-800 py-2 border-2 border-green-600 px-6 my-2 rounded hover:bg-green-600 hover:border-none hover:text-white"
                    >Buy Now
                    </button>
                  </div>
                </div>
              </div>
              )

            })

            }
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
