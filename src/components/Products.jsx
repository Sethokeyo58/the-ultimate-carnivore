import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterPrice, setFilterPrice] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://68afa85ab91dfcdd62bcc609.mockapi.io/api/02/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    let matchesFilter = true;
    if (filterPrice === "low") matchesFilter = product.price < 10;
    if (filterPrice === "mid") matchesFilter = product.price >= 10 && product.price < 20;
    if (filterPrice === "high") matchesFilter = product.price >= 20;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 mt-7 text-center">Carnivore Products</h2>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />

        <select
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        >
          <option value="all">All Prices</option>
          <option value="low">Below $10</option>
          <option value="mid">$10 - $19</option>
          <option value="high">$20 and above</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-cyan-700 mb-4">
                ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
