import React from "react";
import Wrapper from "../shared/Wrapper";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Wrapper>
        <header className="flex justify-between pt-6 pb-4 items-center sticky top-0">
          <ul className="font-semibold lg:flex lg:space-x-10 lg:text-lg lg:font-normal hidden">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>My Blogs</Link>
            </li>
          </ul>
          <div className="text-3xl font-bold">
            <h2 className="">READER</h2>
          </div>
        </header>
      </Wrapper>
    </>
  );
};

export default Header;
