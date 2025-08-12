import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Placeholder components
const Home = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Welcome to Carnivore Diet</h1>
    <p>Intro to carnivore diet, featured products...</p>
  </div>
);
const About = () => (
  <div className="p-6 max-w-4xl mx-auto">Detailed info on carnivore lifestyle and philosophy</div>
);
const Products = () => (
  <div className="p-6 max-w-4xl mx-auto">List and detail pages for products, with add to cart functionality</div>
);
const Cart = () => (
  <div className="p-6 max-w-4xl mx-auto">Shopping cart and checkout page</div>
);
const Blog = () => (
  <div className="p-6 max-w-4xl mx-auto">Articles or posts related to the diet</div>
);
const Contact = () => (
  <div className="p-6 max-w-4xl mx-auto">Contact form to send messages using EmailJS</div>
);
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
