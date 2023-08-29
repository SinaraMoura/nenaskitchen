'use client';
import RecipesContainer from "@/app/components/RecipesContainer"
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function Recipes() {
    const response = await fetchWrapper('/recipes/list');

    return (
        <div className="w-full container px-5">
            <h1 className="text-2xl font-medium mb-4">Recipes</h1>
            <div className="grid grid-cols-3 gap-4">
                {response.map((recipe: any) => {
                    return (
                        <RecipesContainer recipes={recipe} />
                    )
                })}
            </div>
        </div>
    )
}