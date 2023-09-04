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
        <div className=" bg-brown-primary px-5 flex  items-center justify-center sm:items-stretch sm:justify-start">
            <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
            />

            <div className="w-full flex flex-col justify-center">
                <div className=" flex space-x-4 pb-8">
                    <div className="flex space-x-4 ">
                        <ul className="flex space-x-4 ">
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
                        </ul>
                        <ul>
                            <NavLink
                                title="Adicionar receita"
                                path="/create-recipe"
                            />
                        </ul>
                        <ul>
                            <NavLink
                                title="Adicionar artigo"
                                path="/create-article"
                            />
                        </ul>
                    </div>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        placeholder="O que vamos comer hoje ?"
                        type="text"
                        value={search}
                        className="w-3/4 px-6 py-[5px] bg-white rounded-lg border border-brown-secundary m-auto mb-8"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>

        </div >
    )
}