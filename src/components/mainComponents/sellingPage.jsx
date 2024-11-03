import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    chiliType: '',
    quantity: '',
    price: '',
    location: '',
    description: '',
    image: null,
  });
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithImage = new FormData();
    Object.keys(formData).forEach((key) => formDataWithImage.append(key, formData[key]));

    try {
      const response = await axios.post('https://api.yoursite.com/sell', formDataWithImage, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Submission Successful!');
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div
      // style={{backgroundImage:`url('public/mirchiTypes/spice-smoked-paprika-form-powder-bowls-spoons_73989-34358.jpg')`}}
      className="bg-gray-200 bg-cover bg-center mt-20">
      {/* Header Section */}
      <header
        style={{ backgroundImage: `url('public/mirchiTypes/red-chili-peppers-black-stone-background_1286611-2027.jpg')` }}
        className=" bg-cover bg-bottom text-center bg-red-600 b text-white top-0 py-12">
        <h1 className="text-4xl font-bold">Sell Your Chilies with Us!</h1>
        <p className="mt-4 text-lg">Join a vast network of buyers and grow your business with confidence.</p>
      </header>

      {/* Benefits Section */}

      {/* Form Section */}
      <section
        style={{ backgroundImage: `url('public/assets/chilli-red-pepper-flakes-chilli-powder-burst_662214-388440.jpg')` }}
        className="container mt-12 bg-cover bg-center flex justify-between mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
        <div className='flex-1 w-3/5'>
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Why Sell with Us?</h2>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Wide Market Access</h3>
              <p>Access thousands of buyers worldwide and expand your business beyond local markets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Fair Pricing</h3>
              <p>Set your own price and negotiate directly with buyers for a fair and profitable sale.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Safe Transactions</h3>
              <p>Our secure platform ensures safe transactions and payment protection for peace of mind.</p>
            </div>
          </div>
        </div>
        <div className='flex-1 w-3/5'>
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Sell Your Mirchi </h2>
          <form onSubmit={handleSubmit} className="">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className=" p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"

                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className=" p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"

                required
              />
              <input
                type="text"
                name="chiliType"
                placeholder="Chili Type (e.g., Guntur, Kashmiri)"
                value={formData.chiliType}
                onChange={handleChange}
                className=" p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"

                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity (in kg)"
                value={formData.quantity}
                onChange={handleChange}
                className=" p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"

                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price per kg (in ₹)"
                value={formData.price}
                onChange={handleChange}
                className=" p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"

                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location (City, State)"
                value={formData.location}
                onChange={handleChange}
                className=" p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"

                required
              />
              <textarea
                name="description"
                placeholder="Description of your chili"
                value={formData.description}
                onChange={handleChange}
                className="p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"

              ></textarea>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="p-4 border-2 hover:border-sky-600 focus:border-none hover:outline-2 hover:shadow-md hover:outline-sky-600 border-gray-500 rounded-lg"

                required
              />
            </div>
            <button
              type="submit"
              className="mt-6 float-right bg-red-600 text-white h-12 w-48 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
            >
              Submit Chili for Sale
            </button>
          </form>
        </div>
      </section>

      {/* Steps to Sell Section */}
      <section className="bg-red-200 container mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">How It Works</h2>
        <div className="flex gap-6 justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-2">1. Create an Account</h3>
            <p>Sign up and verify your account to start selling on our platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-2">2. List Your Chili</h3>
            <p>Provide details about your chili, including quantity, price, and quality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-2">3. Connect with Buyers</h3>
            <p>Communicate and finalize deals directly with buyers interested in your produce.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-10 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-gray-800">What types of chilies can I sell?</h3>
            <p className="text-gray-600 mt-2">You can sell any variety of dried red chili. Make sure to specify the type and quality in the listing.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-gray-800">How do I get paid?</h3>
            <p className="text-gray-600 mt-2">Payments are made directly from buyers to sellers. We recommend secure online payment options.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-gray-800">Can I update my listing?</h3>
            <p className="text-gray-600 mt-2">Yes, you can modify your chili details or price anytime from your account dashboard.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellingPage;
