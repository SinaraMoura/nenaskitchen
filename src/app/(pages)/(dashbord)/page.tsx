'use client';
import ElasticCarousel from "@/app/components/Carousel";
import { Input } from "@/app/components/Input";
import RecipesContainer from "@/app/components/RecipesContainer";
import { fetchWrapper } from "@/utils/fetchWrapper";
import Link from "next/link";

export default async function Dashboard() {
    const response = await fetchWrapper('/recipes/list', {
        method: 'GET',
    });

    return (
        <div className="flex flex-col  justify-center w-full container px-5  bg-backgound-body m-auto">
            <Input
                placeholder="O que vamos comer hoje ?"
                type="text"
                className="m-auto"
            />
            <h4 className="text-3xl">Faça sua escolha de hoje !</h4>
            <ElasticCarousel />
            <h4 className="text-3xl mb-[2rem]" >Receitas</h4>
            <div className="grid grid-cols-3 gap-4">
                {response.slice(0, 6).map((recipe: any) => {
                    return (
                        <RecipesContainer recipes={recipe} />
                    )
                })}
            </div>
            <button type="button" className="m-auto w-1/2 py-3.5 px-8 rounded-lg border-none bg-brown-primary duration-75 mt-4 mb-4">
                <Link href="/recipes">
                    Ver todas as receitas
                </Link>
            </button>
        </div>
    )
}