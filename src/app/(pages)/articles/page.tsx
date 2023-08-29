'use client';
import ArticlesContainer from "@/app/components/ArticlesContainer"
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function Articles() {
    const response = await fetchWrapper('/articles/list');

    return (
        <div className="w-full container px-5">
            <h1 className="text-2xl font-medium mb-4">Articles</h1>
            <div className="grid grid-cols-3 gap-4">
                {response.map((article: any) => {
                    return (
                        <ArticlesContainer articles={article} />
                    )
                })}
            </div>
        </div>
    )
}