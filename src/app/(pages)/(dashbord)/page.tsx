'use client';
import ElasticCarousel from "@/app/components/Carousel";
import RecipesContainer from "@/app/components/RecipesContainer";
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function Dashboard() {
    const response = await fetchWrapper('/recipes/list');

    return (
        <div className="w-full container px-5  bg-backgound-body">
            <h3 className="text-5xl text-yellow-950 pb-4 font-bold">Bem vindo(a) a Nena's Food e Drinks</h3>
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
        </div>
    )
}