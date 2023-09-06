'use client';
import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { useForm } from 'react-hook-form';
import { categories } from '../../../../public/items.json'
import { Button } from "@/app/components/Form/Button";
import { toast } from 'react-toastify';
import FormData from 'form-data';
import { api } from '@/app/utils/api';

export default function CreateRecipes() {
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

    const onSubmit = async (data: IFormProps) => {
        console.log("🚀 ~ file: page.tsx:24 ~ onSubmit ~ data:", data)
        try {
            const formattedDate = new Date();
            const formData = new FormData();

            const formattedIngredients = data.ingredients.split('\n')
            const formattedPreparation = data.preparation.split('\n')

            formData.append('title', data.title);
            formData.append('duration', data.duration);
            formData.append('date', formattedDate.toISOString());
            formData.append('difficulty', data.difficulty);
            formData.append('category', data.category);
            formData.append('image', data.image);
            formData.append('proceeds', data.proceeds);

            formattedIngredients.forEach((ing, index) => {
                formData.append(`ingredients[${index}]`, ing);
            })
            formattedPreparation.forEach((prep, index) => {
                formData.append(`preparation[${index}]`, prep);
            })

            const response = await api.post(`/recipes`, formData);

            toast.success('Receita adicionada com sucesso!');
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
        }

    }

    const handleFileChange = (name: any, file: any) => {
        setValue(name, file);
    };

    return (
        <div className="container m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-1 grid-cols-1 p-8">
                    <div className="mb-4 pr-6 border-r-2 border-color-secundary-1 ">
                        <div className="mb-4">
                            <p className="text-blue text-2xl font-medium">
                                Adicionar Receita
                            </p>
                            <p className=" text-backing-color-3 text-base font-semibold">
                                "Gastronomia é a arte de usar comida para criar felicidade." - Theodore Zeldin.
                            </p>

                        </div>
                        <Input
                            title="Título"
                            placeholder="Insira o nome da sua receita"
                            type="text"
                            {...register('title')}
                        />

                        <Input
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
                        />
                        <Input
                            title="Dificuldade"
                            placeholder="Nível de dificuldade"
                            type="text"
                            {...register('difficulty')}
                        />

                        <label className="mb-4 text-blue text-scale-gray-6 font-medium">Ingredientes</label>
                        <textarea
                            className="w-full font-medium text-scale-gray-6 px-6 py-[5px] bg-white rounded-lg border border-color-secundary-1"
                            title="Ingredientes"
                            placeholder="Obs.: Separar os ingredientes com vírgula e quebrar a linha"
                            {...register('ingredients')}
                        />

                        <label className="mb-4 text-scale-gray-6 font-medium">Modo de Preparo</label>
                        <textarea
                            className="w-full px-6 py-[5px] text-scale-gray-6 font-medium bg-white rounded-lg border border-color-secundary-1"
                            title="Mode de Preparo"
                            placeholder="Obs.: Separar as etapas com vírgula e quebrar a linha"
                            {...register('preparation')}
                        />

                        <p className=" text-scale-gray-6 text-base font-medium mb-4">
                            Selecione a categoria
                        </p>
                        <div className="grid grid-cols-5 gap-2">
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
                    <div className=" mb-4 ml-4">
                        <p className="text-blue text-2xl font-medium">Adicionar Receita</p>
                        <p className="text-backing-color-3 text-base font-semibold">
                            Deixe aqui registrada a sua felicidade! :)
                        </p>
                        <div className="h-[90%] flex flex-col place-content-between">
                            <div className="my-4">
                                <p className="text-blue  text-base font-medium mb-4">Imagem</p>

                                <div className="w-full  h-80 bg-zinc-300 rounded-3xl shadow mb-11">
                                    <InputFile
                                        {...register('image')}
                                        onChange={(e) => handleFileChange('image', e)}
                                    />
                                </div>
                            </div>
                            <Button title="Cadastrar receita" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}