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
        <div className="w-full border-b shadow-md  bg-scale-gray-1 flex items-stretch  sm:w-full md:w-full">
            <div className="w-full sm:w-auto hidden sm:block">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    priority={true}


                />
            </div>


            <div className="w-full m-auto flex flex-col px-6 py-[5px] sm:w-full md:w-full lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="O que vamos comer hoje ?"
                        type="text"
                        value={search}
                        className="w-full sm:w-full md:w-full px-6 py-[5px] bg-white rounded-full border border-color-secundary-1 m-auto mb-8 mt-8"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                <div className="w-full flex ">
                    <div className="flex  justify-center items-stretch space-x-1 mb-8">
                        <ul className="flex gap-7 flex-col sm:flex-row md:flex-row lg:flex-row ">
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