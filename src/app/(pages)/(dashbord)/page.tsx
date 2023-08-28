'use client';
import { categories } from "@/utils/categories";
import Carousel from '@/app/components/Carousel';

export default function Dashboard() {
    return (
        <div className="container px-5  bg-backgound-body">
            <h3 className="text-5xl text-yellow-950 pb-4 font-bold">Bem vindo(a) a Nena's Food e Drinks</h3>
            <p className="text-3xl pb-4">Faça sua escolha de hoje!</p>
            <div className=" lg:gap-2 sm:gap-1 ">
                <Carousel>
                    {categories.map((categorie) => {
                        return (
                            <div className="p-2 flex flex-col items-center justify-center cursor-pointer">
                                <img src={categorie.icon} alt={categorie.route} className="w-64 h-48 " />
                                <p>{categorie.name}</p>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    )
}