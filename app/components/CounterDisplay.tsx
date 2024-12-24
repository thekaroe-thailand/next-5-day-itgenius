'use client';

import { useContext } from "react";
import { DataContext } from "../context/page";

export default function CounterDisplay() {
    const { counter } = useContext(DataContext)
    return (
        <div className="text-2xl font-bold">
            {counter}
        </div>
    )
}

