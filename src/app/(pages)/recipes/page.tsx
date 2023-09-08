
import RecipesContainer from "@/app/components/RecipesContainer"
import { fetchWrapper } from "@/app/utils/fetchWrapper";

export default async function Recipes() {
    const response = await fetchWrapper('/recipes/list', {
        method: 'GET',
    });

    return (
        <div className="m-auto h-full container px-5 mb-8">
            <h1 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nenas's Ticken > Receitas`}</h1>
            <div className="w-full gap-4 pb-8 grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
                {response.map((recipe: any) => {
                    return (
                        <RecipesContainer recipes={recipe} />
                    )
                })}
            </div>
        </div>
    )
}