'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { GoTrash } from "react-icons/go";
import { TfiPencilAlt } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { api } from "@/utils/api";
import Link from "next/link";
import { toast } from "react-toastify";

export default function ArticleDetailsPage({ params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const router = useRouter();

    const [article, setArticle] = useState({
        title: '',
        image: '',
        description: '',
        text: [],
    })

    const deleteArticle = async ()=>{
        try {
            const response = await api.delete(`/articles/delete/${id}`);
            toast.success('Artigo excluído com sucesso!');
            router.push("/articles");
        } catch (error:any) {
             toast.error(error?.response?.data?.message);
        }
    }
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
           <div className="flex justify-content items-center justify-between">
           <h1 className="text-4xl font-bold text-scale-gray-7 mb-12 mt-12">{article.title}</h1>

            <div className='flex gap-2.5 pointer'>
                    <GoTrash  onClick={()=>deleteArticle()}/>
                    <Link href={`/edit-article/${id}`}>
                        <TfiPencilAlt />
                    </Link>
            </div>
           </div>
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