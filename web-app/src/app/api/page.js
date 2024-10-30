"use client"
import Image from "next/image";
import { useState } from "react";

export default function Page() {

  // create a product page 
  // create a header
  // create a button to request data
  // request data
  // store data in my state (react state)  
  // output data

  const [products, setProducts] = useState(null)
  const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

  async function fetchProduct() {
    const response = await fetch(API_ENDPOINT);
    //waiting for the response
    //taking the response and assigning to another varibale 
    console.log(response)
    const data = await response.json();
    console.log(data)

    setProducts(data)
  }

  const ProductList = () => {
    return (
      <div className="border-4 border-yellow-200 p-4 mb-4 font-mono font-medium">
        Product will go here when we get data!
      </div>
    )
  }


  return (
    <div className="bg-lime-900 p-4">
      <header className="border-4 border-lime-300 p-4 mb-4">
        <h1 className="text-4xl mb-6 text-emerald-100 underline decoration-green-500 font-mono font-medium">
          Welcome to my product page
        </h1>

        <button 
          className="border-rose-600 border-2 p-2 font-serif tracking-wide bg-rose-400 hover:bg-rose-600 text-rose-900 hover:text-rose-300 font-semibold"
          onClick={fetchProduct}
        >
          Fetch products!
        </button>
      </header>

      <ProductList />
    </div>
  );
}



