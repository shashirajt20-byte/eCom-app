//@ts-nocheck
'use client'

import '@/app/globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [userInput, setUserInput] = useState('');
  const [suggestion, setSuggestion] = useState([]);

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  useEffect(function () {
    async function getProds() {
      const response = await fetch("https://dummyjson.com/products?limit=194")
      const data = await response.json();
      const products = data?.products;

      const filterdSuggestions = products.filter(function (item) {
        return item.title.toLowerCase().includes(userInput.toLowerCase());
      })
      setSuggestion(filterdSuggestions.slice(0, 10));
    }
    if (userInput) {
      getProds();
    }
    else{
      setSuggestion([]);
    }

  }, [userInput])


  return (
    <html>
      <body>
        <header >
          <h1 >E-Com</h1>
          <form action="/search" method="GET" style={{ position: "relative" }}>
            <div style={{ height: "30px", display: "flex", gap: "3px" }}>
              <input name="n" required type="text" placeholder='Search for Products.. ' value={userInput} onChange={handleInputChange} style={{ padding: "10px", font: "caption" }} />
              <button style={{ width: "80px" }}>Search</button>
              <div style={{
                position: "absolute",
                top :30, 
                left :0,
                width:"100%", 
                backgroundColor:"white",
                borderRadius:"10px",
                color:"black",
              }}>
                {
                  suggestion.map(function (elem) {
                    return (
                      <h2 key={elem.id}>{elem.title}</h2>
                    )
                  })
                }
              </div>
            </div>
          </form>

          <div style={{ display: "flex", gap: "10px", height: "30px", padding: "10px" }} >
            <button style={{ width: "80px" }}>Login</button>
            <Link href={"/cart"} style={{ textDecoration: "none" }}>
              <div style={{ width: "80px", height: "28px", textAlign: "center", alignContent: "center", border: "1px solid white", color: "white" }}>Cart</div>
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer >
          <h2 style={{ padding: "" }}>2025   E-Com Ltd.   www.e-com.com</h2>
        </footer>
      </body>
    </html>
  )
}