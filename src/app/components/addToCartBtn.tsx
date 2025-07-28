'use client';
import {useState, useEffect} from "react"
export default function AddToCartBtn({item}){
    const [inCart, setInCart] = useState(false);
    useEffect(function(){
        let prevItems = localStorage.getItem('cart');
        prevItems = prevItems? JSON.parse(prevItems):[];
        const existingItem = prevItems?.find(function(elem){
            return elem.id == item.id;
        })

        if(existingItem) setInCart(true);

    },[])
    function handleAdd(){
        let prevItems = localStorage.getItem('cart');
        prevItems = prevItems? JSON.parse(prevItems):[];

        // const existingItem = prevItems.find(function(elem){
        //     return elem.id == item.id;
        // })

        // if(existingItem){
        //     existingItem.quantity = existingItem.quantity + 1;
        // }
        // else{
        //     const itemToAdd = {
        //         ...item,
        //         quantity :1
        //     }
        //     prevItems.push(item);
        // }

        

        prevItems.push(item);
        localStorage.setItem('cart',JSON.stringify(prevItems))
        setInCart(true);
    }
    return(
        <>
        
        {
            inCart? <button>Added to cart</button> : <button onClick={handleAdd}>Add to Cart</button>
        }

        </>
    )
}