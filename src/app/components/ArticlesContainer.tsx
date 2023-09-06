'use client';
import Link from "next/link";

export default function ArticlesContainer({ articles }: any) {
    const image = `http://localhost:3333/uploads/${articles.image}`;
    return (
        <Link href={`/articles/${articles._id}`}>
            <div className="w-full flex  items-center justify-center flex-col mb-4 cursor-pointer">
                <div className="rounded w-72 h-96 relative bg-black bg-opacity-25  shadow bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <h3 className="text-normal pb-1 font-semibold">{articles.title}</h3>
            </div>
        </Link>
    )
}