//@ts-nocheck
import ItemCard from '@/app/components/ItemCard';
// import products from "@/app/constants/data";                     // fetching data from the database.
import { wrap } from 'module';

export function generateMetadata({ searchParams }) {
    const searchTerm = searchParams.n;
    return {
        title: " Search Page :" + searchTerm,
        description: "ajkjfaoj",
    }
}

export default async function Page({ searchParams }) {

    // fetching search data from api
    const query = searchParams.n?.toLowerCase() || "";
    let data;
    try {
        const url = 'https://dummyjson.com/products/search?q=' + query;
        const response = await fetch(url);
        const data = await response.json();
    } catch (err) {

    }
    let results = data?.products;

    // filtering the searh item
    const min = searchParams.min;
    const max = searchParams.max;
    const rating = searchParams.rating;

    // let results=products.filter(function(item){
    //     if(item.title.toLowerCase().includes(query)){
    //         return true;
    //     }

    // })
    if (min) {
        results = results.filter(function (item) {
            if (item.price > min) return true;
        })
    }
    if (max) {
        results = results.filter(function (item) {
            if (item.price < max) return true;
        })
    }
    if (rating) {
        results = results.filter(function (item) {
            if (item.rating > rating) return true;
        })
    }
    return (
        <div>
            <h1>Showing results for: {query}</h1>
            <div>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px"
                }}>
                    {
                        results.length == 0 &&
                        <div>
                            <h2>No search results are found for: {query}</h2>
                        </div>
                    }
                    {
                        results.map(function (item) {                                            // maping products on the screen
                            return <ItemCard key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}