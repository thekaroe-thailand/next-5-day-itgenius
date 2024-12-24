"use client"

import { useState } from "react";

export default function ClientComponent() {
    const [items] = useState(['apple', 'banana', 'cherry']);

    return (
        <div className="text-center mt-10 text-2xl">
            <h1>Hi Client Component</h1>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}