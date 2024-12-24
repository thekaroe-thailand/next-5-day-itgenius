export default function ServerComponent() {
    const items = ['apple', 'banana', 'cherry'];

    return (
        <div className="text-center mt-10 text-2xl">
            <h1>Hi Server Component</h1>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

