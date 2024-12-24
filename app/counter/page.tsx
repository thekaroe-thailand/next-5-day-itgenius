"use client"

import { useState } from "react";

export default function Page() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        count > 0 && setCount(count - 1);
    }
    return (
        <div className="text-center mt-10 text-2xl">
            <h1>{count}</h1>
            <button onClick={handleIncrement} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                + Increment
            </button>
            {" "}
            <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded-md">
                - Decrement
            </button>
        </div>
    )
}