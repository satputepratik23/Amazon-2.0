import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/*Top Nav */}
      <div className="flex bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer mt-1 bg-yellow-400 hover:bg-yellow-500 ">
          <input
            className="p-2 h-full rounded-l-md flex-grow flex-shrink focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className=" h-12 p-4" />
        </div>

        {/*right elements */}
        <div className="text-white flex items-center text-xs text-justify space-x-5 mx-6 whitespace-nowrap">
          <div className=" link">
            <p>Hello, Pratik!</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-6 bg-yellow-400 h-4 w-4 text-center rounded-full font-extrabold text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/*Sub-nav */}
      <div className="flex items-center text-sm space-x-3 p-2 pl-6 text-white bg-amazon_blue-light">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link ">Prime Video</p>
        <p className="link ">Amazon Buisness</p>
        <p className="link ">Today'sDeal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Snopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
