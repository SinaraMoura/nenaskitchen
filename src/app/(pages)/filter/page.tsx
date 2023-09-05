'use client';
import RecipesContainer from "@/app/components/RecipesContainer";
import { fetchWrapper } from "@/app/utils/fetchWrapper";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'
export default function FilterPage({ params }: { params: { category: string } }) {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const [recipes, setRecipes] = useState([]);
    const [filterNull, setFilterNull] = useState('');

    useEffect(() => {
        async function filterRecipe() {
            const response = await fetchWrapper(`/recipes/category/${category}`, {
                method: 'GET',
            });
            if (response.length === 0) {
                return setFilterNull(`Nenhuma receita encontrada com a categoria '${category}'`);
            }
            setRecipes(response);

        }
        filterRecipe()
    }, [])
    return (
        <div className="w-full m-auto container px-5">
            <h1 className="text-2xl font-medium mb-4">{`Nena's Ticken > Filtros > ${category}`}</h1>
            <div className="grid grid-cols-3 gap-4 items-center justifiy-center">
                {recipes.map((recipe: any) => {
                    return (
                        <RecipesContainer key={recipe.id} recipes={recipe} />
                    )
                })}

            </div>
            <p className="text-base font-medium">{filterNull}</p>
        </div>
    )
}