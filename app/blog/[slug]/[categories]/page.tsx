// http://localhost:3000/blog/ai/computer
export default function Page({ params }: {
    params: {
        slug: string,
        categories: string
    }
}) {
    return (
        <div className="text-center mt-10 text-2xl">
            <h1>Hi Blog {params.slug} {params.categories}</h1>
        </div>
    )
}
