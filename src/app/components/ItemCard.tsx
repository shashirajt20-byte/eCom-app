//@ts-nocheck
import Link from 'next/link';
import Image from 'next/image';


export default function ItemCard({ item }) {

    

  const href = "/product/" + item.id;
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div id="productbox" style={{
        width: 288,
        height: 510,
        
        borderRadius: "5px",
        justifyContent: "center",
        marginTop: "5px",
        color: "black"
      }}>
        <div  id="about" style={{

          height: 300,
  

        }}>
          <img src={item.thumbnail} width={280} height={300} alt={item.title} />
        </div >
        <div style={{ marginLeft: 5 }}>
          <h2>{item.title}</h2>
          <p>Price:{item.price}</p>
          <p>Rating:{item.rating}<span>5</span></p>
        </div>
          <p>{item.description}</p>
          
      </div>
    </Link >
  )
}