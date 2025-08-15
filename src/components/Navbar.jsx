import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Firebase config (yours from the login JSX)
const firebaseConfig = {
  apiKey: "AIzaSyBgEEJnrw41nivT-l9IiVLE_Lzq4Rkw8aI",
  authDomain: "the-ultimate-carnivore.firebaseapp.com",
  projectId: "the-ultimate-carnivore",
  storageBucket: "the-ultimate-carnivore.firebasestorage.app",
  messagingSenderId: "314932218908",
  appId: "1:314932218908:web:a02b4ea8bd48f1d6c5a3d9",
  measurementId: "G-BN663LW3DQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      if (user) setIsAuthOpen(false);
    });
    return unsub;
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Login (and auto-signup if user not found)
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;
    if (!email || !password) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUserDetails({ email: "", password: "" });
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          setUserDetails({ email: "", password: "" });
        } catch (e2) {
          console.error(e2);
        }
      } else {
        console.error(err);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserDetails({ email: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Shop Cart", path: "/cart" },
    { name: "Blog And Guides", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "User Profile", path: "/profile" },
  ];

  return (
    <>
      <nav className="bg-red-800 shadow-md text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Brand (logo removed as requested) */}
            <div className="flex items-center gap-2">
              <Link to="/" className="text-xl font-bold">
                The Ultimate Carnivore
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition ${
                      isActive
                        ? "bg-yellow-500 text-red-900"
                        : "hover:bg-yellow-500 hover:text-red-900"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}

              {/* Login / Logout Button */}
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 hover:text-red-900"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 hover:text-red-900"
                >
                  Login / Signup
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="p-2 rounded-md hover:bg-yellow-500 hover:text-red-900 focus:outline-none"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-red-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition ${
                      isActive
                        ? "bg-yellow-500 text-red-900"
                        : "hover:bg-yellow-500 hover:text-red-900"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-red-900"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-red-900"
                >
                  Login / Signup
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Login/Signup Modal (Firebase + Google) */}
      {isAuthOpen && !isLoggedIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Login / Signup</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-red-800 text-white py-2 rounded hover:bg-red-900"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600"
              >
                Continue with Google
              </button>

              <button
                type="button"
                onClick={() => setIsAuthOpen(false)}
                className="mt-2 text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
