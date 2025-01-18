"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 bg-white z-30 inset-x-0 border-b-2 border-gray-300">
      <header className="relative bg-white">
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-16 space-x-4">
            {/* Left Section - Logo and Navbar Links */}
            <div className="flex items-center space-x-5">
              {/* Logo */}
              <Link href="/page">
                <h3 className="text-lg font-bold text-gray-700 cursor-pointer">
                  Shopi
                </h3>
              </Link>

              {/* Navbar Links */}
              <nav className="hidden md:flex space-x-3 text-[11px] font-normal  ">
                <Link
                  href="/aboutus"
                  className="text-gray-600 hover:text-blue-500 uppercase"
                >
                  All
                </Link>
                <Link
                  href="/curriculum"
                  className="text-gray-600 hover:text-blue-500 uppercase"
                >
                  Clothes
                </Link>
                <Link
                  href="/community"
                  className="text-gray-600 hover:text-blue-500 uppercase"
                >
                  Electronics
                </Link>
                <Link
                  href="/offering"
                  className="text-gray-600 hover:text-blue-500 uppercase"
                >
                  Furniture
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-500 uppercase"
                >
                  Toys
                </Link>
              </nav>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-5 text-[12px] ml-auto font-normal">
              <p className="text-gray-400 text-[13px] ">userintheapp@test.com</p>
              <Link
                href="/offering"
                className="text-gray-600 hover:text-blue-500 uppercase"
              >
                My Orders
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-500 uppercase"
              >
                My Account
              </Link>
              <Link href="/cart" className="flex items-center">
                <button className="text-black px-2 py-1.5 ">
                  <FaShoppingCart className="w-5 h-6" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center ml-auto">
              <button
                className="text-gray-500 hover:text-blue-500 focus:outline-none"
                onClick={toggleMenu}
              >
                <GiHamburgerMenu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col mt-3 space-y-2 text-sm">
              <Link
                href="/aboutus"
                className="text-gray-500 hover:text-blue-500 uppercase"
              >
                About Us
              </Link>
              <Link
                href="/curriculum"
                className="text-gray-500 hover:text-blue-500 uppercase"
              >
                Curriculum
              </Link>
              <Link
                href="/community"
                className="text-gray-500 hover:text-blue-500 uppercase"
              >
                Community
              </Link>
              <Link
                href="/offering"
                className="text-gray-500 hover:text-blue-500 uppercase"
              >
                Offering
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-blue-500 uppercase"
              >
                Contact
              </Link>
              <Link href="/login" className="w-full text-center">
                <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full transition hover:bg-blue-600">
                  SIGN IN
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
