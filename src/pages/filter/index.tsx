'use client';
import RecipesContainer from "../../components/RecipesContainer";
import { fetchWrapper } from "../../utils/fetchWrapper";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { categories } from '../../../public/items.json';

export default function FilterPage({ params }: { params: { category: string } }) {
    const searchParams = useSearchParams();
    const router = useRouter();
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
    }, [category])

    const optionSelect = (option: any) => {
        router.push(`/filter?category=${option.target.value}`)
        async function filterRecipe() {
            const response = await fetchWrapper(`/recipes/category/${option.target.value}`, {
                method: 'GET',
            });
            if (response.length === 0) {
                setRecipes([]);
                return setFilterNull(`Nenhuma receita encontrada com a categoria '${option.target.value}'`);
            } else {
                setFilterNull('')
            }
            setRecipes(response)
        }
        filterRecipe()
    }
    return (
        <div className="w-full h-full m-auto container px-5">
            <h1 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nena's Ticken > Filtros > ${category}`}</h1>

            <select className="mb-8 border px-4 py-2" onChange={(e) => optionSelect(e)}>
                <option value="">--Selecione uma categoria</option>

                {categories.elastic.map((categorie) => {
                    return (
                        <option value={categorie.name} key={categorie.id}>{categorie.name}</option>
                    )
                })}
            </select>

            <p className="text-base font-medium">{filterNull}</p>

            <div className="grid grid-cols-1 gap-4 items-center justifiy-center pb-8 h-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">

                {recipes.map((recipe: any) => {
                    return (
                        <RecipesContainer key={recipe.id} recipes={recipe} />
                    )
                })}
            </div>
        </div>
    )
}