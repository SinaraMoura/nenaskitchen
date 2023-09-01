'use client';
import { fetchWrapper } from "@/utils/fetchWrapper";
import RecipesSearch from '@/app/components/RecipesSearch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
export default function Search({ params }: { params: { title: string } }) {
    const [searchRecipe, setSearchRecipe] = useState([])
    const searchParams = useSearchParams();

    useEffect(() => {

        async function searchRecipe() {
            const title = searchParams.get('title')
            const response = await fetchWrapper(`/recipes/title?name=${title}`,
                {
                    method: 'GET',
                });
            setSearchRecipe(response)
        }
        searchRecipe()
    }, [])
    return (
        <div>
            {searchRecipe.map((recipe: any, index: number) => {
                return <RecipesSearch recipes={recipe} key={index} />;
            })}
            Search
        </div>
    )
}