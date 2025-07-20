import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartment",
  "Villa",
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-gray-800">StayFinder</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for locations or accommodations..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link href="/sign-in">
            <button className="text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex gap-4 overflow-x-auto whitespace-nowrap">
          {accommodationTypes.map((type) => (
            <button
              key={type}
              className="px-3 py-1 rounded-full bg-white border text-sm text-gray-700 hover:bg-blue-100 transition"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
