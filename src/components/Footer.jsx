import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-white">
              TheUltimateCarnivore
            </Link>
            <p className="mt-2 max-w-xs text-gray-400">
              Embrace the carnivore lifestyle with our premium products and expert guides.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex space-x-8 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-3">Site</h3>
              <ul>
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Support</h3>
              <ul>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:text-white">
                    Shop Cart
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-white">
                    User Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social media */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.94 9.87v-6.98h-2.7v-2.89h2.7v-2.2c0-2.67 1.58-4.15 4-4.15 1.16 0 2.37.21 2.37.21v2.6h-1.34c-1.32 0-1.73.82-1.73 1.66v2h2.95l-.47 2.89h-2.48v6.98A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.96-2.48 9.12 9.12 0 01-2.83 1.07 4.52 4.52 0 00-7.71 4.13A12.85 12.85 0 013 4.82a4.48 4.48 0 001.4 6.04 4.41 4.41 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.53 4.53 0 004.22 3.15A9 9 0 012 19.54 12.78 12.78 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.18 8.18 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TheUltimateCarnovore<sup>TM</sup>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;