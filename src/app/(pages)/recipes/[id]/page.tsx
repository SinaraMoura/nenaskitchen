'use client';
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function RecipesDetailsPage({ params }: { params: { id: string } }) {
    const response = await fetchWrapper(`/recipes/id/${params.id}`, {
        method: 'GET',
    });
    const image = `http://localhost:3333/uploads/${response.image}`
    return (
        <div>
            <div
                className="w-full h-[280px] relative bg-black   shadow bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div>
                <h3>{response.title}</h3>
                <p>{response.preparation.map((prep: any) => {
                    return (
                        <p>- {prep}</p>
                    )
                })}</p>
            </div>
        </div>
    )
}   