'use client';
import Image from "next/image";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from 'react';

export function NavBar() {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.push(`/search?title=${search}`);
        setSearch('')
    };
    return (
        <div className="border-b shadow-md  bg-scale-gray-1 flex items-center justify-center sm:items-stretch sm:items-stretch md:items-center lg:item-center xl:items-center 2xl:item-center">
            <div className="block sm:hidden md:block lg:block xl:block 2xl:block">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={200}
                    height={200}
                />
            </div>

            <div className=" m-auto flex flex-col  justify-center item-center sm:w-6/12 md:w-9/12 lg:w-full">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="O que vamos comer hoje ?"
                        type="text"
                        value={search}
                        className="w-1/2 flex item-center px-6 py-[5px] bg-white rounded-full border border-color-secundary-1 m-auto mb-8"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                <div className="w-full flex space-x-4 sm:w-6/12 md:w-9/12 lg:w-full">
                    <div className="w-full flex space-x-4 justify-center items-center sm:w-6/12 md:w-9/12 lg:w-full sm:items-center md:items-center lg:item-center xl:items-center 2xl:item-center">
                        <ul className="flex gap-7 ">
                            <NavLink
                                title="Home"
                                path="/"
                            />
                            <NavLink
                                title="Receitas"
                                path="/recipes"
                            />
                            <NavLink
                                title="Artigos"
                                path="/articles"
                            />
                            <NavLink
                                title="Adicionar receita"
                                path="/create-recipe"
                            />
                            <NavLink
                                title="Adicionar artigo"
                                path="/create-article"
                            />


                        </ul>
                    </div>
                </div>
            </div>

        </div >
    )
}