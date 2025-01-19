"use client"
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Navbar from "../components/Navbar";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        setProducts([]);
      });
  }, []);

  const filteredProducts = products
    .filter((product) => product.category?.name.toLowerCase() === "furniture")
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.price - b.price);

  const sanitizeUrl = (url) => {
    if (url && typeof url === "string" && url.trim() !== "") {
      return url;
    }
    return "/default-image.jpg";
  };

  return (
    <div className="sticky top-0 bg-white z-30 inset-x-0 border-b-2 border-gray-300">
     <Navbar/>

      <div className="flex flex-col items-center justify-center mt-8">
        <div className="text-center">
          <h1 className="text-normal font-bold mb-2">Home</h1>
          <div className="relative">
            <input
              placeholder="Search a Product..."
              className="input border-2 border-black px-5 py-3 rounded w-80"
              name="search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="mt-5 max-w-6xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {filteredProducts.map((product) => (
                <div key={product.id} className="rounded-lg flex flex-col items-center bg-white p-5">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src={sanitizeUrl(product.images?.[1])}
                      alt={product.title}
                      layout="fill"
                      style={{ objectFit: "cover" }}
                      className="rounded-2xl"
                    />
                    <span className="absolute top-2 right-2 text-black bg-white p-2 rounded-full cursor-pointer">
                      <FaPlus />
                    </span>
                  </div>
                  <div className="flex gap-5">
                    <h2 className="text-sm font-semibold">{product.title}</h2>
                    <p className="text-gray-700 font-normal">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
