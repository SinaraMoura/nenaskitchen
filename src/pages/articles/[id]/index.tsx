'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/utils/api";

export default function ArticleDetailsPage({ params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [article, setArticle] = useState({
        title: '',
        image: '',
        description: '',
        text: [],
    })
    useEffect(() => {
        const detailArticle = async () => {
            const response = await api.get(`/articles/id?id=${id}`);
            setArticle(response.data)
        }
        detailArticle()
    }, [])

    return (
        <div className="m-auto w-full h-full px-8 pb-8 mb-12">
            <p className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nena's Kitchen > Artigos > ${article.title}`}</p>
            <h1 className="text-4xl font-bold text-scale-gray-7 mb-12 mt-12">{article.title}</h1>
            <div
                className="rounded w-full h-96 relative bg-black shadow bg-cover bg-no-repeat bg-center mb-12"
                style={{ backgroundImage: `url(${article.image})` }}
            />
            <h3 className="mb-12 text-xl">{article.description}</h3>
            {article.text.map((text: string[], index: number) => {
                return (
                    <div className="flex items-center text-lg md:text-lg gap-4 md:gap-4 px-5 md:px-5 py-5 md:py-5 ">
                        <p className="font-bold text-2xl sm:text-5xl text-backing-color-3 mb-3">{index + 1}</p>
                        <p className="mb-1 sm:mb-2">{text}</p>
                    </div>

                )
            })}
        </div>
    )
}