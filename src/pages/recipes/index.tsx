import { api } from "@/utils/api";
import RecipesContainer from "../../components/RecipesContainer";
import { GetServerSideProps } from "next";

export default function Recipes({ recipes: categories }: any) {
    console.log(categories);
    
  categories.sort((a: any, b: any) => a.category.localeCompare(b.category));

    return (
        <div className="m-auto h-full container px-5 mb-8">
            <h1 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{`Nenas's Ticken > Receitas`}</h1>
            {categories.map((category: any) => (
                <div key={category.category}>
                <h2 className="text-xl font-bold text-scale-gray-7 mt-8 mb-8">{category.category}</h2>
                <div className="w-full gap-4 pb-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
                    {category.recipes.map((recipe: any) => (
                    <RecipesContainer key={recipe._id} recipes={recipe} />
                    ))}
                </div>
                </div>
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    let categories = [];
    try {
        const response = await api.get('/recipes/category'); 7
        categories = response.data;

    } catch (error) {
        categories = [];
    }
    return {
        props: {
            recipes: categories
        }
    }
}