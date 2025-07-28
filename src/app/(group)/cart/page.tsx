//@ts-nocheck
'use client';
import { useState, useEffect } from 'react';
import ItemCard from '@/app/components/ItemCard';

export default function Page() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(function () {
        let items = localStorage.getItem("cart");
        items = items ? JSON.parse(items) : [];
        setCartItems(items);
    }, [])

    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price;
    }

    return (
        <main>
            <div style={{border:"1px solid black", display:"flex"}}>
                <h1 style={{padding:"10px", background:"lightgreen", flex:1}}>Your Cart</h1>
                <h1 style={{padding:"10px", background:"yellow"}}>Subtotal : ${totalPrice.toFixed(2)}</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
                {
                    cartItems.map(function (item, index) {
                        return <ItemCard key={index} item={item} />
                    })
                }
                
            </div>
        </main>
    )
}