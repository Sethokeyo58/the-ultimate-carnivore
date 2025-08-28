import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Blog from "./components/Blog";
import { CartProvider } from "./components/CartContext"; 

const infoCards = [
  {
    title: "What is the Carnivore Diet?",
    description:
      "A zero-carb diet focused primarily on animal products. It eliminates all plant-based foods and emphasizes meat, fish, and animal fats.",
    icon: (
      <img
        src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Carnivore Diet"
        className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg"
      />
    ),
  },
  {
    title: "Health Benefits",
    description:
      "Supporters report improved mental clarity, weight loss, reduced inflammation, and better digestion when strictly following the diet.",
    icon: (
      <img
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Health Benefits"
        className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg"
      />
    ),
  },
  {
    title: "Featured Products",
    description:
      "Explore our curated selection of high-quality carnivore diet-friendly products designed to support your lifestyle.",
    icon: (
      <img
        src="https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Featured Products"
        className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg"
      />
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
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
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

const Profile = () => (
  <div className="p-6 max-w-4xl mx-auto">User profile page</div>
);

const App = () => {
  return (
    <CartProvider>
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
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;