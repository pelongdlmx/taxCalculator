import React from "react";

import Logo from "../resources/Plusgrade-Inversed.5cee8653.svg";

export default function Header() {
  return (
    <header className="bg-primary-dark sticky top-0 z-50 p-6 lg:p-8">
      <div className="mx-auto container">
        <nav aria-label="Global" className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a className="-m-1.5 p-1.5" href="/">
              <span className="sr-only">Plusgrade</span>
              <img
                alt="Plusgrade"
                width="151"
                height="25"
                decoding="async"
                data-nimg="1"
                className="h-8 w-auto"
                src={Logo}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              className="text-sm/6 font-semibold text-white undefined"
              href="/products/">
              Products
            </a>
            <div className="relative" data-headlessui-state="">
              <button
                className="flex items-center gap-x-1 text-sm/6 font-semibold text-white"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-_r_i_">
                Industries
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="size-4 flex-none text-white">
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <a
              className="text-sm/6 font-semibold text-white undefined"
              href="/partners/">
              Partners
            </a>
            <a
              className="text-sm/6 font-semibold text-white undefined"
              href="/about/">
              About
            </a>
            <a
              className="text-sm/6 font-semibold text-white undefined"
              href="/resources/">
              Resources
            </a>
            <a
              className="text-sm/6 font-semibold text-white bg-blue px-4 py-2 mt-[-7px] mb-[-7px] rounded-full text-center"
              href="/contact/request-a-demo/">
              Request a Demo
            </a>
            <button
              className="flex items-center text-sm left-left font-black text-white flex"
              id="headlessui-menu-button-_r_o_"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              data-headlessui-state="">
              Language
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                width="20"
                color="white">
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
