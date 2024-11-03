// import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-9xl font-extrabold text-red-600">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600 text-center">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="mt-6">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
