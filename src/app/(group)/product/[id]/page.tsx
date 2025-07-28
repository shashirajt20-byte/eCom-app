//@ts-nocheck
// import stuff from '@/app/constants/data';
import Image from "next/image";
import { notFound } from 'next/navigation';
import AddToCartBtn from '@/app/components/addToCartBtn';

export async function generateMetadata({params}){
    const id = params.id;

    const url = "https://dummyjson.com/products/" +id;
    const response = await fetch(url);
    const product = await response.json();

    return {
        title: product.id ? product.title : "Product not Found",
        description : product?.description

    }    
}

export default async function Page({params}){
    const id = params.id;

    const url = "https://dummyjson.com/products/" +id;
    const response = await fetch(url);
    const product = await response.json();

    // const x = stuff.find(function(elem){
    //     if(elem.id==id) return true;
    // })

    if(!product.id){
        notFound();
    }

    return(
        <main>
            <div>
                <div>
                    <img src={product?.thumbnail} alt={product?.title} width={400} height={400}/>
                </div>
                <div>
                    <h2>{product?.title}</h2>
                    <p>Price: ${product?.price}</p>
                    <p>Rating: {product?.rating}</p>
                    <p>{product?.description}</p>
                    <AddToCartBtn item={product}/> 
                </div>
            </div>
        </main>
    )
}