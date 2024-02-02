'use client';
import { api } from "@/utils/api";
import ElasticCarousel from "../../components/Carousel";
import RecipesContainer from "../../components/RecipesContainer";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

export default function Dashboard() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function listRecipes() {
            try {
                api.interceptors.request.use((req) => {
                    req.timeout = 30000;
                    return req;
                });
                const response = await api.get('/recipes/list'); 7
                setRecipes(response.data);

            } catch (error: any) {
                toast.error(error?.response?.data?.message);
            }
        }
        listRecipes()
    }, [])
    return (
        <div className=" flex flex-col justify-center w-full  bg-scale-gray-1 mb-12 ">
            <div className="mb-8 ">
                <ElasticCarousel />
            </div>
            <h1 className="mx-20 mb-8 text-2xl text-scale-gray-7 font-medium">Confira as últimas receitas !</h1>
            <div className="flex flex-col justify-center w-full mb-8">

                <div className="w-full gap-4 pb-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ">
                    {recipes.slice(0, 8).map((recipe: any) => {
                        return (
                            <RecipesContainer recipes={recipe} key={recipe._id} />
                        )
                    })}
                </div>
                <button type="button" className="m-auto uppercase text-scale-gray-7 font-medium  py-3.5 px-8 rounded-lg  bg-color-secundary-2 duration-75 mt-4 mb-4">
                    <Link href="/recipes">
                        Ver todas as receitas
                    </Link>
                </button>
            </div>

        </div>
    )
}


