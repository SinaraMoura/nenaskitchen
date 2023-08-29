'use client';
import Image from "next/image";

export default function RecipesContainer({ recipes }: any) {
    return (

        <div className="rounded flex flex-col mb-4 cursor-pointer">
            <div className="w-full p-3 h-[150px] relative bg-black bg-opacity-25 rounded-3xl shadow bg-cover bg-center"
                style={{ backgroundImage: `url(/carnes.webp)` }}
            />
            <h3 className="text-normal pb-1 font-bold">{recipes.title}</h3>
        </div>

    )
}