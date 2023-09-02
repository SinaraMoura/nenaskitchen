
import RecipesContainer from "@/app/components/RecipesContainer"
import { fetchWrapper } from "@/app/utils/fetchWrapper";

export default async function Recipes() {
    const response = await fetchWrapper('/recipes/list', {
        method: 'GET',
    });

    return (
        <div className="w-full m-auto container px-5">
            <h1 className="text-2xl font-medium mb-4">Recipes</h1>
            <div className="w-full grid grid-cols-3 gap-4 items-center justifiy-center">
                {response.map((recipe: any) => {
                    return (
                        <RecipesContainer recipes={recipe} />
                    )
                })}
            </div>
        </div>
    )
}