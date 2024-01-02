'use client';
import { PiTimer, PiCookingPotLight } from 'react-icons/pi'
import { AiOutlineUser } from 'react-icons/ai';
import { GoTrash } from "react-icons/go";
import { TfiPencilAlt } from "react-icons/tfi";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from 'react-toastify';
import { api } from "@/utils/api";
import Link from 'next/link';

export default function RecipesDetailsPage({ params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const router = useRouter();

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

    const deleteRecipes = async ()=>{
        try {
            const response = await api.delete(`/recipes/delete/${id}`);
            toast.success('Receita excluída com sucesso!');
            router.push("/recipes");
        } catch (error:any) {
             toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        async function detailRecipe() {
            const response = await api.get(`/recipes/id?id=${id}`);
            setRecipeId(response.data)
        }
        detailRecipe()
    }, [])
    return (

        <div className='m-auto w-full flex flex-col gap-6 md:gap-10 px-4 sm:px-8 pb-8 mb-12'>
            <div className='flex justify-content items-center justify-between'>
                <p className="text-lg md:text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nena's Kitchen > Receitas > ${recipeId.category} > ${recipeId.title}`}</p>
            
                <div className='flex gap-2.5 pointer'>
                    <GoTrash  onClick={()=>deleteRecipes()}/>
                    <Link href={`/edit-recipes/${id}`}>
                        <TfiPencilAlt />
                    </Link>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                <div
                    className="rounded h-80 md:h-96 relative bg-black shadow bg-cover bg-center mb-4 md:mb-0"
                    style={{ backgroundImage: `url(${recipeId.image})` }}
                />
                <div className="flex flex-col items-center border border-scale-gray-2 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 rounded bg-scale-gray-2">
                    <h1 className="text-xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10">{recipeId.title}</h1>
                    <div className="w-full border border-backing-color-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10"></div>

                    <div className="flex flex-col font-bold md:flex-row items-center justify-between text-backing-color-2 lg:justify-center gap-4 sm:gap-6 md:gap-28">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 text-scale-gray-7 mt-6 sm:mt-8">
                <div className="w-full sm:w-full">
                    <h3 className="text-xl md:text-xl font-medium mb-2 sm:mb-4 md:mb-6">Ingredientes</h3>
                    {recipeId.ingredients.map((ing: string[], index: number) => {
                        return (
                            <ul key={index} className="list-disc pl-8 md:pl-8 text-lg md:text-lg ">
                                <li>{ing}</li>
                            </ul>
                        )
                    })}
                </div>
                <div className="w-full sm:w-2/4 mt-8 sm:mt-0 md:w-full text-scale-gray-7">
                    <h3 className="text-xl md:text-xl font-medium mb-2 sm:mb-4 md:mb-6">Modo de Preparo</h3>
                    {recipeId.preparation.map((prep: string[], index: number) => {
                        return (
                            <div key={index} className="rounded cursor-pointer flex items-center text-lg md:text-lg gap-4 md:gap-4 px-5 md:px-5 py-5 md:py-5 hover:bg-scale-gray-2">
                                <p className="font-bold text-base md:text-5xl text-backing-color-3">{index + 1}</p>
                                <p className="mb-1 md:mb-2">{prep}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}   