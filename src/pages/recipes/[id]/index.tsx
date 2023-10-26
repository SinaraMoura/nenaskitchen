'use client';
import { fetchWrapper } from "../../../utils/fetchWrapper";
import { PiTimer, PiCookingPotLight } from 'react-icons/pi'
import { AiOutlineUser } from 'react-icons/ai';
import { useEffect, useState } from 'react'
export default function RecipesDetailsPage({ params }: { params: { id: string } }) {
    const [recipeId, setRecipeId] = useState({
        title: '',
        image: '',
        proceeds: '',
        duration: '',
        category: '',
        difficulty: '',
        ingredients: [],
        preparation: []
    })
    useEffect(() => {
        async function detailRecipe() {
            const response = await fetchWrapper(`/recipes/id/${params.id}`, {
                method: 'GET',
            });
            setRecipeId(response)
        }
        detailRecipe()
    }, [])
    const image = `https://nenas-kitchen-api.onrender.com/uploads/${recipeId.image}`
    return (
        <div className='m-auto w-full flex flex-col  h-full px-8 pb-8 gap-10'>
            <p className="text-xl font-bold text-scale-gray-7  mt-8 mb-8">{`Nena's Kitchen > Receitas > ${recipeId.category} > ${recipeId.title}`}</p>
            <div className=" flex w-full h-96 gap-10">
                <div
                    className="rounded w-2/4 h-96 relative bg-black shadow bg-cover bg-center mb-4"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="w-2/4 flex flex-col items-center  border border-scale-gray-2 px-8 py-8 rounded bg-scale-gray-2">
                    <h1 className="text-4xl text-backing-color-2 font-bold mb-12">{recipeId.title}</h1>
                    <div className="w-full border border-backing-color-4 mb-12 "></div>

                    <div className="flex items-center justify-center gap-28 font-bold text-backing-color-2">
                        <div className="flex flex-col items-center justify-center">
                            <AiOutlineUser />
                            <p>{recipeId.proceeds}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <PiTimer />
                            <p>{recipeId.duration}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <PiCookingPotLight />
                            <p>{recipeId.difficulty}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-10 text-scale-gray-7">
                <div className="w-2/4 ">
                    <h3 className="text-2xl  font-medium mb-4">Ingredientes</h3>
                    {recipeId.ingredients.map((ing: string[]) => {
                        return (
                            <ul className="list-disc px-8 text-xl">
                                <li>{ing}</li>
                            </ul>
                        )
                    })}
                </div>
                <div className="w-2/4 h-full text-scale-gray-7">
                    <h3 className="text-2xl font-medium text-scale-gray-7 mb-4">Modo de Preparo</h3>
                    {recipeId.preparation.map((prep: string[], index: number) => {
                        return (
                            <div className="rounded cursor-pointer flex items-center text-xl gap-4 px-5 py-5 hover:bg-scale-gray-2">
                                <p className="font-bold text-5xl text-backing-color-3">{index + 1}</p>
                                <p className="mb-2">{prep}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}   