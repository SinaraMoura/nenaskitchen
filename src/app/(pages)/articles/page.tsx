
import ArticlesContainer from "@/app/components/ArticlesContainer"
import { fetchWrapper } from "@/app/utils/fetchWrapper";

export default async function Articles() {
    const response = await fetchWrapper('/articles/list', {
        method: 'GET'
    });

    return (
        <div className="m-auto h-full container px-5 mb-8">
            <h1 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nenas's Ticken > Artigos`}</h1>
            <div className="w-full grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 pb-8">
                {response.map((article: any) => {
                    return (
                        <ArticlesContainer articles={article} />
                    )
                })}
            </div>
        </div>
    )
}