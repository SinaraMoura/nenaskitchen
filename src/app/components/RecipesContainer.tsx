'use client';

import { fetchWrapper } from "@/utils/fetchWrapper";
import Link from "next/link";

export default async function RecipesContainer({ recipes }: any) {
    const response = await fetchWrapper(`/recipes/id/${recipes._id}`, {
        method: 'GET',
    });

    const image = `http://localhost:3333/uploads/${recipes.image}`;
    return (
        <Link href={`/recipes/${response._id}`}>
            <div className="w-full flex justify-center items-center flex-col mb-4 cursor-pointer">

                <div className="rounded w-full p-3 h-80 relative bg-black bg-opacity-25  shadow bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />

                <h3 className="text-normal pb-1 font-bold">{recipes.title}</h3>
            </div>
        </Link>

    )
}