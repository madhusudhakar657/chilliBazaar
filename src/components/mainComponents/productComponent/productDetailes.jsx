/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { RxCrossCircled } from "react-icons/rx";
import { FaCross, FaPhone } from 'react-icons/fa';


function ProductInfoDialog({ product, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10 max-h-screen max-w-screen">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50" aria-hidden="true" />

      {/* Dialog Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
          {/* Close Button */}
          <div className='text-white flex justify-end items-end'>
              <button type='button' onClick={onClose} className="bg-transparent border-none text-black">
            <RxCrossCircled className="h-6 w-6" />
          </button>
          </div>
        

          {/* Product Slider */}
          <div className="relative h-1/4 bg-red-200">
            <div className="flex h-full overflow-x-scroll space-x-4 snap-x snap-mandatory p-4">
              {product?.images?.map((image, index) => (
                <div key={index} className="w-1/3 h-full flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden snap-center">
                  <img src={image} alt={`Product image ${index + 1}`} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4">Variety: {product.variety}</p>

            {/* Price and Availability */}
            <div className="flex items-center justify-start xs:justify-between mb-4">
              <span className="text-xl font-bold text-red-600">₹{product.pricePerKg} / Kg</span>
              <span className={`mx-10 px-6 py-1 rounded-full font-bold text-base ${product.availability === "In Stock" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                {product.availability}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* Supplier Information */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900">Supplier Details</h4>
              <p className="text-gray-600">Name: {product.supplier}</p>
              <p className="text-gray-600">Address: {product.supplierAddress}</p>
              <div className="flex items-center text-gray-600">
                <FaPhone className="h-5 w-5 mr-2" />
                <a href={`tel:${product.contactNumber}`} className="text-blue-600 hover:underline">
                  {product.contactNumber}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="xs:w-full flex items-center justify-center gap-x-10">
              <button className="xs:w-1/3 xs:px-0 w-1/4 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-500">
                Add to Cart
              </button>
              <button className="xs:w-1/3 xs:px-0 w-1/4 px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500">
                Buy Now
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ProductInfoDialog;
