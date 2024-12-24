// http://localhost:3000/blog/computer
export default function Page({ params }: {
    params: {
        slug: string
    }
}) {
    return (
        <div className="text-center mt-10 text-2xl">
            <h1>Hi Blog {params.slug}</h1>
        </div>
    )
}
