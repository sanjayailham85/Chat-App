import React from 'react';

const Register = () => {
  return (
    <div className="bg-green-300 h-screen flex items-center justify-center">
      <div className="bg-white px-14 py-5 rounded-lg flex flex-col gap-3 items-center">
        <span className="flex text-lg font-semibold text-gray-800">
          Chat App
        </span>
        <span className="flex text-sm text-gray-500">Register</span>
        <form className="flex flex-col gap-6 ">
          <input
            className="text-sm pl-0 p-3 border-b-2 border-gray-400 outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="text-sm pl-0 p-3 border-b-2 border-gray-400 outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="text-sm pl-0 p-3 border-b-2 border-gray-400 outline-none"
            type="password"
            placeholder="Password"
          />
          <input className="text-gray-500" type="file" />
          <button className="bg-green-200 p-2 rounded-md font-medium text-gray-800">
            Sign Up
          </button>
        </form>
        <p className="py-2 text-sm text-gray-600">
          Don't have account?{' '}
          <span className="underline cursor-pointer font-medium">Login</span>{' '}
        </p>
      </div>
    </div>
  );
};

export default Register;
