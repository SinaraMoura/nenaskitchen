import Image from "next/image";
import { Input } from "./Input";


export function NavBar() {
    return (
        <div className=" bg-brown-primary px-5 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
            />

            <div className="w-full flex flex-col justify-center">
                <div className=" flex space-x-4 pb-8">
                    <div className="flex space-x-4">
                        <a href="" className="bg-brown-secundary text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="" className="text-gray-300 hover:bg-brown-hover hover:text-white block rounded-md px-3 py-2 text-base font-medium">Receitas</a>
                        <a href="" className="text-gray-300 hover:bg-brown-hover hover:text-white block rounded-md px-3 py-2 text-base font-medium">Artigos</a>
                    </div>
                </div>
                <Input
                    placeholder="O que vamos comer hoje ?"
                    type="text"
                />


            </div>
        </div >
    )
}