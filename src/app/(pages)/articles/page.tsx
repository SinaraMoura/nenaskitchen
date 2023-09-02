
import ArticlesContainer from "@/app/components/ArticlesContainer"
import { fetchWrapper } from "@/app/utils/fetchWrapper";

export default async function Articles() {
    const response = await fetchWrapper('/articles/list', {
        method: 'GET'
    });

    return (
        <div className="w-full m-auto container px-5">
            <h1 className="text-2xl font-medium mb-4">Artigos</h1>
            <div className="grid grid-cols-3 gap-4 items-center justifiy-center">
                {response.map((article: any) => {
                    return (
                        <ArticlesContainer articles={article} />
                    )
                })}
            </div>
        </div>
    )
}