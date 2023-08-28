'use client';

import ElasticCarousel from "@/app/components/Carousel";

export default function Dashboard() {
    return (
        <div className="w-full container px-5  bg-backgound-body">
            <h3 className="text-5xl text-yellow-950 font-bold pb-4">Bem vindo(a) a Nena's Food e Drinks</h3>

            <ElasticCarousel />

        </div>
    )
}