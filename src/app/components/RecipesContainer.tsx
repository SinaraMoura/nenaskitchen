'use client';
import Link from "next/link";

export default function RecipesContainer({ recipes: recipeId }: any) {
    const image = `http://localhost:3333/uploads/${recipeId.image}`;
    return (
        <Link href={`/recipes/${recipeId._id}`}>
            <div className="w-full flex items-center flex-col mb-4 cursor-pointer">
                <div className="rounded w-72 h-96 relative bg-black bg-opacity-25  shadow bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <h3 className="text-normal pb-1 font-semibold">{recipeId.title}</h3>
            </div>
        </Link>

    )
}