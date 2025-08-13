import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBgEEJnrw41nivT-l9IiVLE_Lzq4Rkw8aI",
  authDomain: "the-ultimate-carnivore.firebaseapp.com",
  projectId: "the-ultimate-carnivore",
  storageBucket: "the-ultimate-carnivore.firebasestorage.app",
  messagingSenderId: "314932218908",
  appId: "1:314932218908:web:a02b4ea8bd48f1d6c5a3d9",
  measurementId: "G-BN663LW3DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleSignup = async () => {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded shadow p-8">
        {user ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Welcome, {user.email}</h2>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isSignup ? "Sign Up" : "Log In"}
            </h2>

            {error && (
              <div className="mb-4 text-red-600 border border-red-600 rounded p-2">
                {error}
              </div>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={isSignup ? handleSignup : handleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4"
            >
              {isSignup ? "Sign Up" : "Log In"}
            </button>

            <button
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mb-4"
            >
              Continue with Google
            </button>

            <p className="text-center text-gray-600">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => {
                  setError("");
                  setIsSignup(!isSignup);
                }}
                className="text-blue-600 hover:underline"
              >
                {isSignup ? "Log In" : "Sign Up"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}