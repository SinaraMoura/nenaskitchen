'use client';
import { fetchWrapper } from "@/utils/fetchWrapper";
import Link from "next/link";

export default async function ArticlesContainer({ articles }: any) {
    const response = await fetchWrapper(`/articles/id/${articles._id}`, {
        method: 'GET',
    });
    const image = `http://localhost:3333/uploads/${articles.image}`;
    return (
        <Link href={`/articles/${response._id}`}>
            <div className="rounded flex items-center justify-center flex-col mb-4 cursor-pointer">
                <div className="w-full p-3 h-80 relative bg-black bg-opacity-25 shadow bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <h3 className="text-normal pb-1 font-bold">{articles.title}</h3>
            </div>
        </Link>

    )
}