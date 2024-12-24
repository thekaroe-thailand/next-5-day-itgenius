"use client"

import { useSearchParams } from "next/navigation";

// http://localhost:3000/pageSearchParams?name=Java&age=20

export default function Page() {
    const searchParams = useSearchParams(); // create searchParams object
    const name = searchParams.get("name");  // get name from url
    const age = searchParams.get("age");    // get age from url

    return (
        <div className="text-center mt-10 text-2xl">
            <h1>Hi Name = {name}</h1>
            <h1>Age = {age}</h1>
        </div>
    )
}
