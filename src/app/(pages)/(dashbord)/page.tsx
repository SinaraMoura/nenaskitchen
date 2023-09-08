'use client';
import ElasticCarousel from "@/app/components/Carousel";
import RecipesContainer from "@/app/components/RecipesContainer";
import { fetchWrapper } from "@/app/utils/fetchWrapper";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function listRecipes() {
            const response = await fetchWrapper('/recipes/list', {
                method: 'GET',
            });
            setRecipes(response)
        }
        listRecipes()
    }, [])
    return (
        <div className="container flex flex-col justify-center w-full  bg-scale-gray-1 ">
            <div className="mb-8">
                <ElasticCarousel />
            </div>
            <h1 className="mx-20 mb-8 text-2xl text-scale-gray-7 font-medium">Confira as últimas receitas !</h1>
            <div className="flex flex-col justify-center w-full mb-8">

                <div className="grid grid-cols-1 gap-4 mx-20 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
                    {recipes.slice(0, 8).map((recipe: any) => {
                        return (
                            <RecipesContainer recipes={recipe} key={recipe._id} />
                        )
                    })}
                </div>
                <button type="button" className="m-auto uppercase text-scale-gray-7 font-medium  py-3.5 px-8 rounded-lg  bg-color-secundary-2 duration-75 mt-4 mb-4">
                    <Link href="/recipes">
                        Ver todas as receitas
                    </Link>
                </button>
            </div>

        </div>
    )
}