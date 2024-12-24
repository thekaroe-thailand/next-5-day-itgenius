export default async function Page() {
    const data = await fetch("https://api.vercel.app/blog");
    const posts = await data.json();

    return (
        <div className="mt-10">
            <h1>Hi Posts</h1>
            {posts.map((post: any) => (
                <div key={post.id}>
                    <div>{post.id} = {post.title}</div>
                </div>
            ))}
        </div>
    )
}

