import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Assitant from '../components/Assitant';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name:', name);
    // Aquí es donde añadirías la lógica para enviar los datos al backend
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
        <h1 className="font-bold text-6xl mb-6">Committed to Simplicity</h1>
        <div className="bg-white  rounded-lg p-8 w-full max-w-md">
          <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-xl font-medium text-gray-700">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={email}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg bg-white "
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg bg-white "
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xl font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg bg-white"
                required
              />
              <div className=" mt-2 text-center">
               <p className='text-gray-400'>
                 By creating an account, you agree to the <Link to={'/terms-of-service'} className='underline'>terms & conditions </Link>, and our <Link to={'/privacy-policy'} className='underline'>privacy policy</Link> .
               </p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xl font-medium text-gray-700 hover:bg-gray-50"
            >
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Sign Up with Google
            </button>
          </div>
          <div className="mt-6 text-center">
           <p className='text-gray-400'>Alredy usin OMK Planner? <Link to={'/singin'} className='text-blue-500'>Sing in</Link></p>
          </div>
        </div>
      </div>
      <Assitant/>
      <Footer />
    </>
  );
}
