//@ts-nocheck
'use client';
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useState } from 'react';
export default function Layout({ children }) {

    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('n') || "";
    const minAm = searchParams.get('min') || "";
    const maxAm = searchParams.get('max') || "";
    const minRating = searchParams.get('rating') || 0;

    const [min, setMin] = useState(minAm);
    const [max, setMax] = useState(maxAm);
    const [rating, setRating] = useState(minRating);

    function handleMin(event) {
        setMin(event.target.value);
    }
    function handleMax(event) {
        setMax(event.target.value);
    }

    const router = useRouter();

    function handleGo() {
        let url = "/search?";
        if (searchTerm) {
            url = url + "&n=" + searchTerm
        }
        if (min) {
            url = url + "&min=" + min;
        }
        if (max) {
            url = url + "&max=" + max;
        }
        
        if(rating) {
            url = url + "&rating=" + rating;
        }
        router.push(url)
    }

    function handleRatingChange(event) {
        setRating(event.target.value);

    }

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ background: "gray", height: "80vh" }}>
                <div style={{ padding: "10px" }}>
                    <input value={min} onChange={handleMin} type="number" placeholder="Enter min value" />
                    <input value={max} onChange={handleMax} type="number" placeholder="Enter max value" />
                </div>
                <div style={{ display: "flex", padding: "10px", gap: "10px" }}>
                    <p>Rating:</p>
                    <select onChange={handleRatingChange} name="rating" id="rating" value={rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button style={{ flex: 1 }} onClick={handleGo}>Go</button>
                </div>
            </div>
            {children}
        </div>
    )
}