import React from "react";
import Wrapper from "../shared/Wrapper";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Wrapper>
        <header className="flex justify-between max-w-screen-xl mx-auto pt-6 pb-4 items-center sticky top-0">
          <div className="text-3xl font-black">
            <h2 className="">READER</h2>
          </div>
        </header>
      </Wrapper>
    </>
  );
};

export default Header;
