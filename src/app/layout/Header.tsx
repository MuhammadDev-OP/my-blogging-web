import React from "react";
import Wrapper from "../shared/Wrapper";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  <Wrapper>
    <header className="flex justify-between max-w-screen-xl mx-auto pt-6 pb-4 items-center sticky top-0">
      <div className="text-xl font-medium">
        <h2>READER</h2>
      </div>
      <div className="sm:w-[400px] border-gray-300 rounded sm:flex sm:relative items-center sm:space-x-2 sm:mx-2 hidden">
        <FiSearch className="ml-4 absolute" />
        <input
          className="w-full rounded-lg border-2  py-2 px-8 text-xs"
          type="text"
          placeholder="What you are looking for"
        />
      </div>

      {/* <div className="bg-slate-300 rounded-full">
            <BsCart size={"1.5em"} />
          </div>  */}
      <div className="flex relative mx-3">
        <Link href={"/"}>
          <div className="bg-slate-300 rounded-full p-2">
            {/* <BsCart className="text-black" size={20} /> */}
          </div>
        </Link>
        <div className="absolute top-0 right-0 bg-red-600 w-3 h-3 rounded-full"></div>
      </div>

      {/* <input type="text" className="border-zinc-950" /> */}
    </header>
  </Wrapper>;
};

export default Header;
