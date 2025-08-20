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
  updateProfile,
} from "firebase/auth";

// Firebase config 
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

  // NEW: user object and signup toggle + error state + username
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const [authError, setAuthError] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setIsLoggedIn(!!u);
      setUser(u);
      if (u) setIsAuthOpen(false); // close modal when logged in
    });
    return unsub;
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // login or signup depending on isSignup
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError("");
    const { email, password } = userDetails;
    if (!email || !password) {
      setAuthError("Please provide both email and password.");
      return;
    }

    try {
      if (isSignup) {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        // set displayName in Firebase so Profile.jsx can show it
        if (username && userCred && userCred.user) {
          await updateProfile(userCred.user, { displayName: username });
        }
        // store masked password (for UI only) - NOT the real password
        sessionStorage.setItem("profile_pwd_masked", "•".repeat(password.length));
        setUsername("");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        // store masked password (for UI only) - NOT the real password
        sessionStorage.setItem("profile_pwd_masked", "•".repeat(password.length));
      }

      setUserDetails({ email: "", password: "" });
      setIsAuthOpen(false);
    } catch (err) {
      setAuthError(err.message || "Authentication error");
      console.error("Auth error:", err);
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // For Google sign-in there is no password; 
      sessionStorage.setItem("profile_pwd_masked", "Signed in with Google");
      setIsAuthOpen(false);
    } catch (err) {
      setAuthError(err.message || "Google sign-in failed");
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserDetails({ email: "", password: "" });
      setUser(null);
      sessionStorage.removeItem("profile_pwd_masked");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Shop Cart", path: "/cart" },
    { name: "Blog And Guides", path: "/blog" },
    { name: "Contact", path: "/contact" },
   
  ];

  return (
    <>
      <nav className="bg-red-800 shadow-md text-white fixed top-0 lef-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            
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

              {/* show profile pic & name/email when logged in */}
              {isLoggedIn && user ? (
                <>
                  <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 hover:text-red-900"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="profile"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-sm">
                        {user.email ? user.email.charAt(0).toUpperCase() : "U"}
                      </div>
                    )}
                    <span className="whitespace-nowrap">
                      {user.displayName || user.email}
                    </span>
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 hover:text-red-900"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthOpen(true);
                    setIsSignup(false); // default to login
                    setAuthError("");
                  }}
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
              {isLoggedIn && user ? (
                <>
                  <NavLink
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 hover:text-red-900"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="profile"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-sm">
                        {user.email ? user.email.charAt(0).toUpperCase() : "U"}
                      </div>
                    )}
                    <span className="whitespace-nowrap">
                      {user.displayName || user.email}
                    </span>
                  </NavLink>

                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-red-900"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthOpen(true);
                    setIsSignup(false);
                    setIsOpen(false);
                    setAuthError("");
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
            <h2 className="text-2xl font-semibold mb-4">
              {isSignup ? "Sign Up" : "Login"}
            </h2>

            {/* show auth error if any */}
            {authError && (
              <div className="mb-2 text-red-600 text-sm border border-red-200 bg-red-50 rounded p-2">
                {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3">
              {isSignup && (
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border p-2 rounded"
                  required
                />
              )}

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
                {isSignup ? "Sign Up" : "Login"}
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600"
              >
                Continue with Google
              </button>

              {/* Toggle between login and signup */}
              <div className="mt-4 text-sm text-center">
                {isSignup ? (
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:underline"
                      onClick={() => {
                        setIsSignup(false);
                        setAuthError("");
                      }}
                    >
                      Login
                    </button>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:underline"
                      onClick={() => {
                        setIsSignup(true);
                        setAuthError("");
                      }}
                    >
                      Sign Up
                    </button>
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsAuthOpen(false);
                  setAuthError("");
                }}
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
