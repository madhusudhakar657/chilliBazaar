/* eslint-disable react/prop-types */
// Signup.jsx
import React, { useState } from "react";
import axios from "axios";

const Signup = ({ handleLoginPage }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        address: "",
        profileImage: null,
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Example API endpoint - replace with your actual API endpoint
        const API_URL = "https://your-api-url.com/signup";

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const response = await axios.post(API_URL, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("User registered:", response.data);
            // Reset form after successful registration
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                address: "",
                profileImage: null,
            });
        } catch (err) {
            setError("Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="xs:w-full xs:mr-0 w-3/5 h-full pt-14 pb-6 mr-10 bg-white flex flex-col justify-start items-center rounded-lg shadow-lg">
            <div className="">
                <h2 className="text-center text-2xl font-extrabold text-gray-900">Create Your Account</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "

                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "

                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "

                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "

                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="sr-only">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "

                        />
                    </div>

                    <div>
                        <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                        <input
                            id="profileImage"
                            name="profileImage"
                            type="file"
                            onChange={handleChange}
                            className="w-full text-gray-700 px-3 shadow-md py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleLoginPage()}
                            className="text-sm my-3 float-center text-blue-500 hover:underline"
                        >
                            Already have a account?
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
