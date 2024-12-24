'use client';

interface Props {
    title: string;
    description: string;
    age?: number;           // allow undefined
    isAdmin?: boolean;      // allow undefined
}

export default function Header({ title, description, age = 0, isAdmin = false }: Props) {
    return (
        <div>
            <h1>Title = {title}</h1>
            <h2>Description = {description}</h2>
            <h3>Age = {age}</h3>
            <h4>Is Admin = {isAdmin ? "Yes" : "No"}</h4>
        </div>
    )
}
