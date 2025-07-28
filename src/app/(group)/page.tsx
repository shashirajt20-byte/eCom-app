//@ts-nocheck


import { Suspense } from 'react';
import ItemCard from '../components/ItemCard';
import { Suspense } from 'react';


export default function Home(){

  

  return(
    <Suspense fallback={
      <div>
      <h2 >Loading...</h2>
      </div>
    }>
      
      <HomePage />
    </Suspense>
  )
}

async function HomePage(){
  const response = await fetch("https://dummyjson.com/products?limit=194")
  const data = await response.json();
  const products = data?.products || [];

  return(
    <div>
      <div style={{display:"flex",flexWrap:"wrap",padding:"10px", gap:"5px", justifyContent:"center"}} >
        {
          products.map(function(item){
            return <ItemCard key={item.id } item={item}/>
          })
        }
      </div>
    </div>
  )
}