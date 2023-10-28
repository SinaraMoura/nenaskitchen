import { GetServerSideProps } from "next";
import ArticlesContainer from "../../components/ArticlesContainer"
import { fetchWrapper } from "../../utils/fetchWrapper";

export default function Articles({ articles }: any) {

    return (
        <div className="m-auto h-full container px-5 mb-12">
            <h1 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nenas's Ticken > Artigos`}</h1>
            <div className="w-full grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 pb-8">
                {articles.map((article: any) => {
                    return (
                        <ArticlesContainer articles={article} />
                    )
                })}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    let articles = [];
    try {
        articles = await fetchWrapper('/articles/list', {
            method: 'GET',
        });
    } catch (error) {
        articles = [];
    }
    return {
        props: {
            articles
        }
    }
}