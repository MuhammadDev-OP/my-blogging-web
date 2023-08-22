"use client";

import React, { useCallback, useState } from "react";
import Wrapper from "../shared/Wrapper";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "../shared/Avatar";
import MenuItem from "../shared/MenuItem";
import LoginModal from "../modals/LoginModal";
import SignUpModal from "../modals/SignUpModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <Wrapper>
        <header className="flex justify-between pt-6 pb-4 items-center sticky top-0">
          <ul className="font-semibold hover:font-bold lg:flex lg:space-x-10 lg:text-lg lg:font-normal hidden">
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
          {isOpen && (
            <div className="absolute rounded-xl py-2 drop-shadow-md w-[40vw] md:w-1/5 bg-white overflow-hidden right-0 top-16 text-sm">
              <div className="flex flex-col cursor-pointer">
                <MenuItem onClick={() => {}} label="My Blogs" />
                <MenuItem onClick={() => {}} label="My Supports" />
                <MenuItem onClick={LoginModal.onOpen} label="logIn" />
                <MenuItem onClick={SignUpModal.onOpen} label="Sign Up" />
                <hr />
                <MenuItem onClick={() => {}} label="logOut" />
              </div>
            </div>
          )}
        </header>
      </Wrapper>
    </>
  );
};

export default Header;