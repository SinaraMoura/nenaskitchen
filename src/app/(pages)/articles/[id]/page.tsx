'use client';
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function ArticleDetailsPage({ params }: { params: { id: string } }) {
    const response = await fetchWrapper(`/articles/id/${params.id}`, {
        method: 'GET',
    });
    const image = `http://localhost:3333/uploads/${response.image}`
    return (
        <div className="m-auto w-full h-full px-8 pb-8 ">
            <p className="text-base font-bold">{`Nena's Kitchen > Artigos > ${response.title}`}</p>
            <h1 className="text-4xl font-bold mb-12 mt-12">{response.title}</h1>
            <div
                className="rounded w-full h-96 relative bg-black shadow bg-cover bg-no-repeat bg-center mb-12"
                style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className="mb-12 text-xl">{response.description}</h3>
            {response.text.map((text: string[], index: number) => {
                return (
                    <div className=" flex items-center text-xl gap-4">
                        <p className="font-bold text-5xl text-slate-500">{index + 1}</p>
                        <p className="mb-2">{text}</p>
                    </div>

                )
            })}
        </div>
    )
}