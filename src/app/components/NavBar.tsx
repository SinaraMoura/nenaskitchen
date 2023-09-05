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
    };
    return (
        <div className=" bg-scale-gray-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={200}
                    height={200}
                />
            </div>

            <div className="  m-auto flex flex-col  justify-center item-center">
                <form action="" onSubmit={handleSubmit}>
                    <input
                        placeholder="O que vamos comer hoje ?"
                        type="text"
                        value={search}
                        className="w-full px-6 py-[5px] bg-white rounded-full border border-color-secundary-1 m-auto mb-8"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                <div className="w-full flex space-x-4">
                    <div className="w-full flex space-x-4 justify-center items-center ">
                        <ul className="flex gap-7 ">
                            <NavLink
                                title="Dashbord"
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