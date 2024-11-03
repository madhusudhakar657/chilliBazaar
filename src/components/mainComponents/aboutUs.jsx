// import React from 'react';

import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="mt-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600">About Us</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Welcome to <span className="font-bold text-red-600">RedChiliMarket</span>, your one-stop destination for premium quality dried red chilies. Our platform connects chili farmers and vendors with buyers across the country, ensuring a seamless online experience for trading and buying dried red chilies. We are passionate about delivering the best quality, value, and service to our customers.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to empower local farmers by providing a platform that connects them directly to buyers, ensuring fair prices and a broader market reach. We strive to offer the finest quality of dried red chilies while promoting sustainable and ethical farming practices.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li><span className="font-semibold text-red-600">Quality:</span> We guarantee the best quality chilies, selected and processed with care.</li>
            <li><span className="font-semibold text-red-600">Sustainability:</span> We support eco-friendly practices that respect our environment and the communities we work with.</li>
            <li><span className="font-semibold text-red-600">Transparency:</span> Honesty and openness are the core of our business. We aim for clear communication with both suppliers and buyers.</li>
            <li><span className="font-semibold text-red-600">Innovation:</span> We’re committed to continually improving the buying and selling experience for everyone involved.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex items-center justify-center">
          <img
            src="assets/chilli-red-pepper-flakes-chilli-powder-burst_662214-388440.jpg"
            alt="Dried Red Chilies"
            className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-full"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="my-12 text-center">
        <p className="text-lg md:text-xl text-gray-700">Join us on our journey to bring the finest dried red chilies from farm to table.</p>
        <Link to='/products'>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
