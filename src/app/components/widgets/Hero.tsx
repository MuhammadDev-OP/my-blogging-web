import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Wrapper>
        {/* <div className="rounded-lg max-w-full shadow-lg p-0 lg:p-8 pb-12 mb-8">
          <div className="relative overflow-hidden shadow-md pb-80 mb-6">
            <Image
              className="rounded-lg object-top absolute h-80 w-full object-cover shadow-lg "
              width={1000}
              height={1000}
              src={"/main.jpg"}
              alt={"mainImage"}
            />
          </div>
        </div> */}

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-0">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
              Sample Blogs
            </h2>
            <p className="font-light text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              sapiente ipsam a laudantium reiciendis.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
              </div>
              <div className="mb-5">
                <span className="relative max-w-full">
                  <img className="rounded-lg " src="/blog1.jpg" alt="" />
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">How to quickly deploy a static website</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                sapiente aliquam, voluptas deleniti, libero molestiae enim eum
                voluptates autem aut molestias totam cum magni labore distinctio
                quis sequi repellendus magnam?
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="MuhammadKharkovavatar"
                  />
                  <span className="font-medium ">Mohd B.</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:underline"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
              </div>
              <div className="mb-5">
                <span className="relative max-w-full">
                  <img className="rounded-lg " src="/blog2.jpg" alt="" />
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                libero ipsam molestias vitae sequi velit repudiandae doloremque
                reiciendis amet, ab nesciunt nisi error enim placeat veritatis
                temporibus eos corrupti adipisci.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green avatar"
                  />
                  <span className="font-medium">John A.</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Hero;