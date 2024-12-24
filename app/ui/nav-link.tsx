import Link from "next/link";

export default function NavLink() {
    return (
        <>
            <Link href="/">Home</Link>
            {" "}
            <Link href="/dashboard">Dashboard</Link>
        </>
    )
}

