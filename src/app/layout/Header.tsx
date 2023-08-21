"use client";

import React from "react";
import Wrapper from "../shared/Wrapper";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "../shared/Avatar";

const Header = () => {
  const toggleOpen = () => {
    console.log("toggled");
  };

  return (
    <>
      <Wrapper>
        <header className="flex justify-between pt-6 pb-4 items-center sticky top-0">
          <ul className="font-semibold lg:flex lg:space-x-10 lg:text-lg lg:font-normal hidden">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
          </ul>
          <div className="text-3xl font-bold">
            <Link href={"/"}>
              <img
                className="w-full h-10 lg:h-16"
                src="/logo-no-background2.svg"
                alt=""
              />
            </Link>
          </div>
          <div
            onClick={toggleOpen}
            className="flex flex-row py-2 px-2 cursor-pointer gap-3 border-[2px] items-center rounded-full"
          >
            <GiHamburgerMenu />
            <div>
              <Avatar src={undefined} />
            </div>
          </div>
        </header>
      </Wrapper>
    </>
  );
};

export default Header;
