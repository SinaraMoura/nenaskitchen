'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import RecipesContainer from "../../components/RecipesContainer";
import { api } from "@/utils/api";

export default function Search({ params }: { params: { title: string } }) {
    const [searchRecipe, setSearchRecipe] = useState([]);
    const [searchRecipeNull, setSearchRecipeNull] = useState('');
    const searchParams = useSearchParams();
    const title = searchParams.get('title');

    useEffect(() => {
        async function searchRecipe() {
            const response = await api.get(`/recipes/title?name=${title}`);
            if (response.data.length === 0) {
                return setSearchRecipeNull(`Nenhuma receita relacionada a '${title}'`);
            }
            setSearchRecipe(response.data)
        }
        searchRecipe()
    }, [title])

    return (
        <div className="w-full m-auto mb-12 container px-5">
            <h1 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Receitas relacionadas a '${title}'`}</h1>

            <div className="w-full container grid grid-cols-1 gap-4 items-center justifiy-center pb-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {searchRecipe.map((recipe: any, index: number) => {
                    return <RecipesContainer recipes={recipe} key={index} />
                })}
            </div>

            <p className="text-2xl font-medium">{searchRecipeNull}</p>
        </div>
    )
}