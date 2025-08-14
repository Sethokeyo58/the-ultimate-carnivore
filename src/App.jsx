import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from  "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";

const infoCards = [
  {
    title: "What is the Carnivore Diet?",
    description:
      "A zero-carb diet focused primarily on animal products. It eliminates all plant-based foods and emphasizes meat, fish, and animal fats.",
    icon: (
      <svg
        className="w-12 h-12 text-red-600 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4m-4 5H8a4 4 0 01-4-4V7"
        ></path>
      </svg>
    ),
  },
  {
    title: "Health Benefits",
    description:
      "Supporters report improved mental clarity, weight loss, reduced inflammation, and better digestion when strictly following the diet.",
    icon: (
      <svg
        className="w-12 h-12 text-green-600 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    ),
  },
  {
    title: "Featured Products",
    description:
      "Explore our curated selection of high-quality carnivore diet-friendly products designed to support your lifestyle.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16h18M3 12h18M3 8h18M4 20h16a1 1 0 001-1v-2a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 001 1z"
        ></path>
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to CarnivoreDiet
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Embrace the carnivore lifestyle for improved health, vitality, and
          simplicity. Discover products, guides, and community support here.
        </p>
      </section>

      {/* Info Cards */}
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {infoCards.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            {icon}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

// const About = () => (
//   <div className="p-6 max-w-4xl mx-auto">
//     I will have my about information here. Have myself Seth, and other 2 people on as my team 
//   </div>
// );
const Products = () => (
  <div className="p-6 max-w-4xl mx-auto">
    Have my products here Also, i will have products added 
  </div>
);
const Cart = () => (
  <div className="p-6 max-w-4xl mx-auto">Shopping cart and checkout page</div>
);
const Blog = () => (
  <div className="p-6 max-w-4xl mx-auto">Articles or posts related to the diet</div>
);
// const Contact = () => (
//   <div className="p-6 max-w-4xl mx-auto">
    
//   </div>
// );
const Profile = () => (
  <div className="p-6 max-w-4xl mx-auto">User profile page</div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="mt-6 mb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
