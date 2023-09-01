'use client';

import { fetchWrapper } from "@/utils/fetchWrapper";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function RecipesContainer({ recipes: recipeId }: any) {
    // const [recipeId, setRecipeId] = useState({
    //     _id: '',
    //     title: '',
    //     image: '',
    // })

    // useEffect(() => {
    //     async function detailRecipe() {
    //         const response = await fetchWrapper(`/recipes/id/${recipes._id}`, {
    //             method: 'GET',
    //         });
    //         setRecipeId(response)
    //     }

    //     detailRecipe()
    // }, [])

    const image = `http://localhost:3333/uploads/${recipeId.image}`;
    return (
        <Link href={`/recipes/${recipeId._id}`}>
            <div className="w-full flex justify-center items-center flex-col mb-4 cursor-pointer">

                <div className="rounded w-full p-3 h-80 relative bg-black bg-opacity-25  shadow bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />

                <h3 className="text-normal pb-1 font-bold">{recipeId.title}</h3>
            </div>
        </Link>

    )
}