import React from "react";
import Logo from "../resources/Plusgrade-Inversed.5cee8653.svg";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white font-sherika  w-full">
      <div className="p-6 lg:px-8">
        <div className="mx-auto container">
          <div>
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
          <div className="md:flex mb-8">
            <div className="w-2/5 mb-8">
              <h3 className="mb-2.5 font-bold">Contact Us</h3>
              <div className="mb-4">
                <p>For billing or customer support inquiries:</p>
                <span>+1. 361. 666. 3617</span>
              </div>
              <div className="mb-4">
                <p>For all other inquiries:</p>
                <span>+1.514.437.2185</span>
              </div>
              <a
                title="Plusgrade on LinkedIn"
                href="https://www.linkedin.com/company/plusgrade/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
            <div className="md:flex flex-grow">
              <div className="w-full mb-8">
                <h3 className="mb-2.5 font-bold">Products</h3>
                <ul>
                  <li>
                    <a
                      className="text-orange"
                      href="/products/#premium-upgrade">
                      Premium Upgrade{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-orange"
                      href="/products/#dynamic-seat-blocker">
                      Seat Blocker{" "}
                    </a>
                  </li>
                  <li>
                    <a className="text-orange" href="/products/#speed-pass">
                      SpeedPass{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-orange"
                      href="/industries/hospitality/upgrade/">
                      Premium Upgrade For Hospitality{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-orange"
                      href="/industries/hospitality/stayextend/">
                      StayExtend{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-orange"
                      href="/industries/hospitality/stayplus/">
                      StayPlus{" "}
                    </a>
                  </li>
                  <li>
                    <a className="text-orange" href="https://www.points.com">
                      Loyalty Solutions by Points{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        height="12"
                        className="inline">
                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z"></path>
                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full mb-8">
                <h3 className="mb-2.5 font-bold">Industries</h3>
                <ul>
                  <li>
                    <a className="text-orange" href="/industries/air/">
                      Air{" "}
                    </a>
                  </li>
                  <li>
                    <a className="text-orange" href="/industries/hospitality/">
                      Hospitality{" "}
                    </a>
                  </li>
                  <li>
                    <a className="text-orange" href="/industries/cruise/">
                      Cruise{" "}
                    </a>
                  </li>
                  <li>
                    <a className="text-orange" href="/industries/rail/">
                      Rail{" "}
                    </a>
                  </li>
                  <li>
                    <a className="text-orange" href="https://www.points.com">
                      Loyalty Solutions{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        height="12"
                        className="inline">
                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z"></path>
                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full mb-8">
                <h3 className="mb-2.5 font-bold">About Plusgrade</h3>
                <ul>
                  <li>
                    <a className="text-orange" href="/about/">
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-orange"
                      href="/about/executive-lead-team/">
                      Executive Leadership Team{" "}
                    </a>
                  </li>
                  <li>
                    <a className="text-orange" href="/careers/">
                      Join Our Team{" "}
                    </a>
                  </li>
                  <li>
                    <a className="text-orange" href="/contact/">
                      Contact Us{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <span className="text-xs text-gray-500 font-light md:mr-4">
                © 2026 Plusgrade Inc. All rights reserved. All other marks are
                the property of their respective owners.
              </span>
              <a
                className="mr-4 border-b border-b-gray-500 font-thin"
                href="/policy/privacy/">
                Privacy policy
              </a>
              <a
                className="mr-4 border-b border-b-gray-500 font-thin"
                href="/policy/cookie-policy/">
                Cookie policy
              </a>
              <a
                className="mr-4 border-b border-b-gray-500 font-thin"
                href="/policy/vulnerability-disclose-program/">
                Vulnerability Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
