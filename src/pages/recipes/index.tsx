import { api } from "@/utils/api";
import RecipesContainer from "../../components/RecipesContainer";
import { GetServerSideProps } from "next";

export default function Recipes({ recipes }: any) {
    return (
        <div className="m-auto h-full container px-5 mb-8">
            <h1 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nenas's Ticken > Receitas`}</h1>
            <div className="w-full gap-4 pb-8 grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
                {recipes.map((recipe: any) => {
                    return (
                        <RecipesContainer key={recipe._id} recipes={recipe} />
                    )
                })}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    let recipes = [];
    try {
        const response = await api.get('/recipes/list'); 7
        recipes = response.data;

    } catch (error) {
        recipes = [];
    }
    return {
        props: {
            recipes
        }
    }
}