import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      // Assume response has a token or success message
      if (response.data.success) {
        // Save token if any, redirect user
        navigate('/dashboard'); // Redirect to dashboard or home after login
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    // Redirect to Forgot Password page
    navigate('/forgot-password');
  };

  const handleCreateAccount = () => {
    // Redirect to Create Account page
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-6">Log in to Chilli Bazaar</h2>
        
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Log In
          </button>
        </form>
        
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleForgotPassword}
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </button>
          <button
            onClick={handleCreateAccount}
            className="text-sm text-blue-500 hover:underline"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
