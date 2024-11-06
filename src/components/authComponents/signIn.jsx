import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Signup from './signUp';
import PasswordDialog from './passwordChange';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const [isSignUp, setIsSignUP] = useState(false);
  const [isSignFp, setIsSignFp] = useState(false);
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
    setIsSignIn(true)
    setIsSignUP(false)
    setIsSignFp(true)
  };
  const handleOnClose = () => {
    setIsSignIn(true)
    setIsSignUP(false)
    setIsSignFp(false)
  };
  

  const handleCreateAccount = () => {
    setIsSignIn(false)
    setIsSignUP(true)
    setIsSignFp(false)
  };

  return (
    <>
      <div style={{ backgroundImage: `url('assets/pile-pepper-pepper-chili-wooden-table_1049143-28188.jpg` }}
        className="min-h-screen  bg-cover bg-center flex flex-col items-center justify-start  pt-24 rounded-md">
        <div className='py-10 text-white'>
          <h1 className='xs:text-2xl text-4xl text-center font-semibold'>🔥 Welcome to Chilli Bazaar! 🔥</h1>
          <p className='xs:text-lg py-2 text-xl text-center'>Your gateway to the world’s finest dry chilies, spices, and fiery flavors delivered right to your door!</p>
        </div>

        <div className='min-w-screen flex xs:flex-col xs:justify-center xs:items-center xs:m-4'>
          <section className='xs:w-full xs:px-4 sm:w-full w-2/5 h-full'>
            <div className="xs:flex-col xs:justify-center xs:items-center text-gray-600 text-white xs:mr-0 xs:p-0 pt-1 pl-16 mb-24 mr-16">
              <div className='w-full p-6 bg-white mb-5 rounded'>
                <h3 className='text-red-600 text-xl text-center font-semibold mb-2'>🌶️ Discover Exclusive Spices</h3>
                <p className='text-gray-800'>Join our community and explore a vast selection of premium dry chilies from around the globe, handpicked for quality and flavor.</p>
              </div>
              <div className='w-full p-6 bg-white my-5 rounded'>
                <h3 className='text-red-600 text-xl text-center font-semibold mb-2'>🍲 Recipe Inspiration & Spice Tips</h3>
                <p className='text-gray-800'>Sign in to access unique recipes, spice pairing tips, and expert advice on creating mouth-watering dishes.</p>
              </div>
              <div className='w-full p-6 bg-white my-5 rounded'>
                <h3 className='text-red-600 text-xl text-center font-semibold mb-2'>🍲 Recipe Inspiration & Spice Tips</h3>
                <p className='text-gray-800'>Sign in to access unique recipes, spice pairing tips, and expert advice on creating mouth-watering dishes.</p>
              </div>
              <div className='w-full p-6 bg-white my-5 rounded'>
                <h3 className='text-red-600 text-xl text-center font-semibold mb-2'>🔥 Member-Only Discounts</h3>
                <p className='text-gray-800'>Stay connected for special offers, discounts, and early access to new products that add a little extra heat to your life!</p>
              </div>
              <p className="footer text-center bg-red-500 p-3 text-xl mt-4">Log in and get ready to turn up the heat!</p>
            </div>
          </section>
          {isSignIn && <div className="xs:w-full xs:mr-0  xs:justify-center w-3/5 h-full pt-14 pb-8 mr-10 bg-white flex flex-col justify-start items-center rounded-lg shadow-lg xs:">
            <img className='w-48 h-48' src='assets/gradient-spicy-logo-template-design_23-2149641027.png' alt="Chilli Bazaar" />
            <h2 className="text-2xl font-bold text-red-600 text-center">Log in to Chilli Bazaar</h2>

            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

            <form onSubmit={handleLogin} className="w-2/3 bg-cover bg-center pt-10 space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                 className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "
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
                 className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "
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
          </div>}
          {isSignUp && <Signup handleLoginPage={handleOnClose}/>}
          {isSignFp && <PasswordDialog mode={"forgot"} isOpen={isSignFp} onClose={handleOnClose}/>}
        </div>
      </div>

    </>
  );
};

export default LoginPage;
