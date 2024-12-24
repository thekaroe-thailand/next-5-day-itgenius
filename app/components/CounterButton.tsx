'use client';

import { useContext } from "react";
import { DataContext } from "../context/page";

export default function CounterButton() {
    const { counter, setCounter } = useContext(DataContext);
    const handleClick = () => {
        setCounter(counter + 1);
    }
    return (
        <button onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded-md">
            Increment
        </button>
    )
}

