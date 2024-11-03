import React from 'react';

const ContactPage = () => {
  return (
    <div 
    style={{backgroundImage:`url('assets/copy-space-chilli-peper_23-2148601208.jpg')`}}
    className="w-screen bg-cover bg-center h-screen pt-24 bg-none">
      <h2 className="text-4xl font-bold text-center text-white my-8">Contact Us</h2>
      <div className="px-12 grid lg:grid-cols-2 gap-5">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-red-600">Contact Info</h3>
          <p className="text-gray-600 text-white mb-4">
            Please feel free to contact us for any inquiries.
          </p>
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <h4 className="font-bold text-lg text-red-600">Our Location</h4>
              <p className="text-white">
                P.B.No 6550, Parottukonam,<br />
                Kesavadasapuram, Kerala, India - 695004
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-red-600">Phone</h4>
              <p className="text-white">+91 9946807500</p>
            </div>
          </div>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=..."
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="p-6 w-full  ml-3 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-400"
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-400"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Your Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-400"
                placeholder="Type your message here..."
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
