'use client';
import { fetchWrapper } from "@/app/utils/fetchWrapper";
import { useEffect, useState } from "react";

export default function ArticleDetailsPage({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState({
        title: '',
        image: '',
        description: '',
        text: [],

    })
    useEffect(() => {
        const detailArticle = async () => {
            const response = await fetchWrapper(`/articles/id/${params.id}`, {
                method: 'GET',
            });
            setArticle(response)
        }
        detailArticle()
    }, [])

    const image = `http://localhost:3333/uploads/${article.image}`
    return (
        <div className="m-auto w-full h-full px-8 pb-8 ">
            <p className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nena's Kitchen > Artigos > ${article.title}`}</p>
            <h1 className="text-4xl font-bold text-scale-gray-7 mb-12 mt-12">{article.title}</h1>
            <div
                className="rounded w-full h-96 relative bg-black shadow bg-cover bg-no-repeat bg-center mb-12"
                style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className="mb-12 text-xl">{article.description}</h3>
            {article.text.map((text: string[], index: number) => {
                return (
                    <div className=" flex items-center text-xl gap-4">
                        <p className="font-bold text-5xl text-backing-color-3">{index + 1}</p>
                        <p className="mb-2">{text}</p>
                    </div>

                )
            })}
        </div>
    )
}