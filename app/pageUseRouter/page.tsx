"use client"

import { useRouter } from "next/navigation";
export default function Page() {
    const router = useRouter();
    const handleGoToDashboard = () => {
        router.push("/dashboard");
    }
    return (
        <>
            <button onClick={() => router.push("/dashboard")}
                className="bg-blue-500 text-white p-2 rounded-md mr-3">
                Go to Dashboard
            </button>
            <button onClick={handleGoToDashboard}
                className="bg-blue-500 text-white p-2 rounded-md">
                Go To Dashboard Example 2
            </button>
        </>
    )
}

