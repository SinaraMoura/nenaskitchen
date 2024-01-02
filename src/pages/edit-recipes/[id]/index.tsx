import { Input } from "@/components/Form/Input";
import { api } from "@/utils/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import listCategories from '../../../../public/items.json'
import { InputFile } from "@/components/Form/InputFile";
import { Button } from "@/components/Form/Button";
import { useEffect, useState } from "react";


export default function EditRecipes({ params }: { params: { id: string } }){
    const categories = listCategories.categories
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get('id');

    const [recipes,setRecipes] = useState({
        title: '',
        duration:'',
        difficulty:'',
        category:'',
        proceeds:'',
        image:'',
        ingredients:'',
        preparation:''
    });

    interface IFormProps {
        time: string;
        title: string;
        duration: string;
        difficulty: string;
        category: string;
        ingredients: string;
        preparation: string;
        proceeds: string;
        date: string;
        image: File;
    }
    const {
        register,
        handleSubmit,
        setValue
    } = useForm<IFormProps>();
    
    useEffect(()=>{
       async function recipes (){
        try {
            const recipe = await api.get(`/recipes/id?id=${id}`);
            console.log(recipe.data);
            setRecipes(recipe.data)
        } catch (error) {
            console.log(error);
            

        }
       }
       recipes()
    },[])
            
   

    

    const onSubmit = async () => {
        try {
            

            const formateddPreparation = recipes.preparation.split('\n');
            const formateddIngredients= recipes.ingredients.split('\n');

            const data = {
                title: recipes.title,
                duration:recipes.duration,
                difficulty:recipes.difficulty,
                category:recipes.category,
                proceeds:recipes.proceeds,
                image:recipes.image,
                ingredients: formateddIngredients,
                preparation:formateddPreparation
            }
       

            const response = await api.put(`/recipes/update/${id}`, data);
        
            

            toast.success('Receita atualizada com sucesso!');
            router.push(`/recipes/list`)
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
        }

    }

    const handleFileChange = (name: any, file: any) => {
        setValue(name, file);
    };
    return(
       <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-1 grid-cols-1 p-8">
                <div className="mb-4 pr-6 border-r-0  border-color-secundary-1 sm:border-r-0 md:border-r-2 lg:border-r-2 sm:items-stretch md:items-center lg:item-center xl:items-center 2xl:item-center">
               <Input
                    title="Título"
                    placeholder="Insira o nome da sua receita"
                    type="text"
                    {...register('title')}
                    value={recipes.title}
                /> 


                <Input
                value={recipes.duration}
                    title="Duração"
                    placeholder="Tempo de duração"
                    type="text"
                    {...register('duration')}       
                />
                <Input
                    title="Rendimento"
                    placeholder="Rende para ..."
                    type="text"
                    {...register('proceeds')}
                    value={recipes.proceeds}       
                />
                <Input
                    title="Dificuldade"
                    placeholder="Nível de dificuldade"
                    type="text"
                    {...register('difficulty')} 
                    value={recipes.difficulty}         
                />

                <label className="mb-4 text-scale-gray-7 text-scale-gray-6 font-medium">Ingredientes</label>
                <textarea
                    className="w-full font-medium text-scale-gray-6 px-6 py-[5px] bg-white rounded-lg border border-color-secundary-1"
                    title="Ingredientes"
                    placeholder="Obs.: Separar os ingredientes com vírgula e quebrar a linha"
                    {...register('ingredients')}   
                    value={recipes.ingredients}        
                />       

                <label className="mb-4 text-scale-gray-6 font-medium">Modo de Preparo</label>
                <textarea
                    className="w-full px-6 py-[5px] text-scale-gray-6 font-medium bg-white rounded-lg border border-color-secundary-1"
                    title="Mode de Preparo"
                    placeholder="Obs.: Separar as etapas com vírgula e quebrar a linha"
                    {...register('preparation')} 
                    value={recipes.preparation}       
                />

                <p className=" text-scale-gray-6 text-base font-medium mb-4">
                    Selecione a categoria
                </p>
                <div className="grid grid-cols-2 gap-2s sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 sm:items-stretch md:items-center lg:item-center xl:items-center 2xl:item-center">
                    {categories.elastic.map((categories) => (
                        <div className="text-scale-gray-6" key={categories.id}>
                            <input
                                 type="checkbox"
                                 className="mr-2 "
                                 {...register('category')}
                                 value={categories.name}          
                            />
                            <label htmlFor="">{categories.name}</label>
                        </div>
                    ))}           
                </div>
                </div>

                <div className=" mb-4 ml-0 sm:ml-4 md:ml-4">
                        <p className="text-scale-gray-7 text-2xl font-medium">Atualizar Receita</p>
                        <p className="text-backing-color-3 text-base font-semibold">
                            Deixe aqui registrada a sua felicidade! :)
                        </p>
                        <div className="h-[90%] flex flex-col place-content-between">
                            <div className="my-4">
                                <p className="text-scale-gray-7  text-base font-medium mb-4">Imagem</p>

                                <div className="w-full  h-80 bg-zinc-300 rounded-3xl shadow mb-11">
                                    <InputFile
                                        {...register('image')}
                                        onChange={(e) => handleFileChange('image', e)}
                                    />
                                </div>
                            </div>
                            <Button title="Atualizar receita" />
                        </div>
                    </div>
            </div>
        </form>
       </div>
    )
}