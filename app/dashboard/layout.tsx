import NavLink from "../ui/nav-link";

export default function DashboardLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="text-center mt-10 text-2xl">
            <NavLink />

            {children}
            <div className="mt-10 bg-blue-500">
                Footer
            </div>
        </div>
    )
}

