import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

const ProfilePage = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        method: "GET",
      });
      const result = await resp.json();
      console.log("result --> ", result);
      setProducts(result.data.products);
    } catch (err) {
      console.error("Error fetching products:", err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const title = e.target.title.value;
      const price = e.target.price.value;
      const description = e.target.description.value;
      const quantity = e.target.quantity.value;
      
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          price: price,
          description,
          quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(resp.status == '201') {
        
      alert("Product added successfully!");
      getData(); 

      console.log("resp --> ", resp);
      } else {
        const result = await resp.json();
        alert(`Invalid data : ${result.message}`);
      }

    } catch (err) {
      console.error("Cannot add product:", err.message);
      alert(`Cannot add product: ${err.message}`);
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-white">
      <Navbar />

      <div className="flex justify-center items-center mt-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl border border-amber-200">
          <div className="flex flex-col gap-2">
            <label className="text-blue-900 font-semibold text-base mb-1">
              Title
            </label>
            <input
              name="title"
              type="text"
              className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-2 px-4 rounded-lg outline-none transition-all duration-200 bg-amber-50 text-blue-900 placeholder:text-blue-400 shadow"
              placeholder="Title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-900 font-semibold text-base mb-1">
              Price
            </label>
            <input
              name="price"
              type="number"
              className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-2 px-4 rounded-lg outline-none transition-all duration-200 bg-amber-50 text-blue-900 placeholder:text-blue-400 shadow"
              placeholder="Price"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-900 font-semibold text-base mb-1">
              Description
            </label>
            <input
              name="description"
              type="text"
              className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-2 px-4 rounded-lg outline-none transition-all duration-200 bg-amber-50 text-blue-900 placeholder:text-blue-400 shadow"
              placeholder="Description"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-900 font-semibold text-base mb-1">
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              min={1}
              className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-2 px-4 rounded-lg outline-none transition-all duration-200 bg-amber-50 text-blue-900 placeholder:text-blue-400 shadow"
              placeholder="Quantity"
            />
          </div>
          <div className="md:col-span-2 flex justify-end mt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg shadow-md transition-all duration-200">
              Add Product
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 p-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="p-6 bg-amber-200 border border-gray-300 rounded-lg shadow-md w-72 hover:scale-105 transition-transform duration-200"
          >
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              {product.title}
            </h2>
            <p className="text-blue-700 font-semibold mb-2">
              Price: <span className="text-lg">Rs. {product.price}</span>
            </p>
            {/* Add more product details here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProfilePage };
