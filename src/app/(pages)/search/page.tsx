'use client';
import { fetchWrapper } from "@/utils/fetchWrapper";
import RecipesSearch from '@/app/components/RecipesSearch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
export default function Search({ params }: { params: { title: string } }) {
    const [searchRecipe, setSearchRecipe] = useState([])
    const searchParams = useSearchParams();
    console.log("🚀 ~ file: page.tsx:9 ~ Search ~ query:", searchParams.get('title'))
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
    // console.log("🚀 ~ file: page.tsx:20 ~ searcRecipe ~ response:", response)


    return (
        <div>
            {searchRecipe.map((recipe: any, index: number) => {
                return <RecipesSearch recipes={recipe} key={index} />;
            })}
            Search
        </div>
    )
}