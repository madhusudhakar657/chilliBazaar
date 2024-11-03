import React from 'react';

const FooterContent = () => {
  return (
    <footer 
    style={{ backgroundImage: `url('/assets/footerFarmerImg.jpg'` }}
    className="bg-cover bg-center text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Chilli Bazaar</h2>
          <p className="text-gray-800">
            Chilli Bazaar is your one-stop online marketplace for premium dried red chilies. We connect farmers directly with buyers, ensuring quality, freshness, and fair prices. From home cooks to professional chefs, our platform provides a seamless experience for all chili lovers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-800 hover:text-white">About Us</a></li>
            <li><a href="#products" className="text-gray-800 hover:text-white">Our Products</a></li>
            <li><a href="#selling" className="text-gray-800 hover:text-white">Selling on Chilli Bazaar</a></li>
            <li><a href="#buying" className="text-gray-800 hover:text-white">Buying on Chilli Bazaar</a></li>
            <li><a href="#faq" className="text-gray-800 hover:text-white">FAQs</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li><a href="#shipping" className="text-gray-800 hover:text-white">Shipping & Delivery</a></li>
            <li><a href="#returns" className="text-gray-800 hover:text-white">Returns & Refunds</a></li>
            <li><a href="#support" className="text-gray-800 hover:text-white">Customer Support</a></li>
            <li><a href="#account" className="text-gray-800 hover:text-white">Manage Your Account</a></li>
            <li><a href="#order" className="text-gray-800 hover:text-white">Track Your Order</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Seller Support */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sell on Chilli Bazaar</h2>
          <p className="text-gray-900">
            Join us as a vendor and access a large customer base across India. Our platform provides tools to help you manage orders, promote your products, and receive secure payments. Start selling your premium chilies and reach new customers today.
          </p>
          <a href="#sell" className="inline-block border-2 border-white bg-white p-2 rounded mt-4 text-red-600 hover:bg-gray-400 hover:border-none hover:text-black">Become a Seller</a>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-800">
            Email: <a href="mailto:support@chillibazaar.com" className="hover:text-white">support@chillibazaar.com</a><br />
            Phone: <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a><br />
            Address: 123 Spice Market Road, Hyderabad, Telangana, India
          </p>
          <div className="mt-4 space-x-3">
            <a href="#facebook" className="text-gray-800 hover:text-white">Facebook</a>
            <a href="#twitter" className="text-gray-800 hover:text-white">Twitter</a>
            <a href="#instagram" className="text-gray-800 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-700 mt-10 pt-6 text-center text-gray-800">
        {/* Terms and Policies */}
        <p className="mb-4">
          <a href="#terms" className="text-gray-800 hover:text-white">Terms of Service</a> | <a href="#privacy" className="text-gray-800 hover:text-white">Privacy Policy</a> | <a href="#cookies" className="text-gray-800 hover:text-white">Cookie Policy</a>
        </p>
        <p className='text-base text-gray-800'>© 2024 Chilli Bazaar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterContent;
