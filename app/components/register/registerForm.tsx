import React from "react";

const RegisterForm = () => {
  return (
    <form action="" className="text-start">
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-2">
          Username
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your username"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
