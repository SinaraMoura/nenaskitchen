import { GetServerSideProps } from "next";
import ArticlesContainer from "../../components/ArticlesContainer"
import { api } from "@/utils/api";

export default function Articles({ articles }: any) {

    return (
        <div className="m-auto h-full container px-5 mb-12">
            <h1 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nenas's Ticken > Artigos`}</h1>
            <div className="w-full grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 pb-8">
                {articles.map((article: any) => {
                    return (
                        <ArticlesContainer key={article._id} articles={article} />
                    )
                })}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    let articles = [];
    try {
        const response = await api.get('/articles/list');
        articles = response.data;
    } catch (error) {
        articles = [];
    }
    return {
        props: {
            articles
        }
    }
}