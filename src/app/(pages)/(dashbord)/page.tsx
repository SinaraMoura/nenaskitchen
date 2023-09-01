'use client';
import ElasticCarousel from "@/app/components/Carousel";
import RecipesContainer from "@/app/components/RecipesContainer";
import { fetchWrapper } from "@/utils/fetchWrapper";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

export default function Dashboard() {
    const [search, setSearch] = useState<string>('');
    const [recipes, setRecipes] = useState([]);
    const router = useRouter();


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const queryString = encodeURIComponent(search);
        router.push(`/search?title=${search}`);
        console.log("🚀 ~ file: page.tsx:22 ~ handleSubmit ~ queryString:", queryString)
        console.log("🚀 ~ file: page.tsx:20 ~ handleSubmit ~ search:", search)

    };
    console.log(search);

    // const onChangeSearch = (e: ) => {
    //     const value = e.target.value;
    //     console.log("🚀 ~ file: page.tsx:25 ~ onChangeSearch ~ value:", value)
    //     console.log(e);

    //     setSearch(value);
    // }
    useEffect(() => {
        async function listRecipes() {
            const response = await fetchWrapper('/recipes/list', {
                method: 'GET',
            });
            console.log(response);

            setRecipes(response)
        }
        listRecipes()
    }, [])
    return (
        <div className="flex flex-col  justify-center w-full container px-5  bg-backgound-body m-auto">
            <form action="" onSubmit={handleSubmit}>
                <input
                    placeholder="O que vamos comer hoje ?"
                    type="text"
                    value={search}
                    className="w-3/4 px-6 py-[5px] bg-white rounded-lg border border-brown-secundary m-auto mb-8"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>

            <h4 className="text-3xl">Faça sua escolha de hoje !</h4>
            <ElasticCarousel />
            <h4 className="text-3xl mb-[2rem]" >Receitas</h4>
            <div className="grid grid-cols-3 gap-4">
                {recipes.slice(0, 6).map((recipe: any) => {
                    return (
                        <RecipesContainer recipes={recipe} key={recipe._id} />
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