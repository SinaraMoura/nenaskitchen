'use client';
import { fetchWrapper } from "@/app/utils/fetchWrapper";
import RecipesSearch from '@/app/components/RecipesSearch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Search({ params }: { params: { title: string } }) {
    const [searchRecipe, setSearchRecipe] = useState([]);
    const [searchRecipeNull, setSearchRecipeNull] = useState('');
    const searchParams = useSearchParams();
    const title = searchParams.get('title');

    useEffect(() => {
        async function searchRecipe() {
            const response = await fetchWrapper(`/recipes/title?name=${title}`,
                {
                    method: 'GET',
                });
            if (response.length === 0) {
                return setSearchRecipeNull(`Nenhuma receita relacionada a '${title}'`);
            }
            setSearchRecipe(response)
            console.log("🚀 ~ file: page.tsx:19 ~ searchRecipe ~ response:", response)
        }
        searchRecipe()
    }, [])

    return (
        <div className="w-full m-auto container px-5">
            <h1 className="text-base font-bold mb-4">{`Nena's Ticken > Pesquise em Nena's Ticken`}</h1>
            <h1 className="text-2xl font-medium mb-4">Receitas relacionadas a '{searchParams.get('title')}'</h1>

            <div className="w-full grid grid-cols-3 gap-4 items-center justifiy-center">
                {searchRecipe.map((recipe: any, index: number) => {
                    return <RecipesSearch recipes={recipe} key={index} />
                })}
            </div>

            <p className="text-2xl font-medium">{searchRecipeNull}</p>
        </div>
    )
}