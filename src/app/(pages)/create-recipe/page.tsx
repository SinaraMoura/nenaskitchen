'use client'
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
        setValue,
        formState: { errors },
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
            // formData.append('ingredients', String(formattedIngredients));
            // formData.append('preparation', String(formattedPreparation));
            console.log(formData);
            formattedIngredients.forEach((ing, index) => {
                formData.append(`ingredients[${index}]`, ing);
            })
            formattedPreparation.forEach((prep, index) => {
                formData.append(`preparation[${index}]`, prep);
            })

            const response = await api.post(`/recipes`, formData);

            toast.success('Receita adicionada com sucesso!');
            console.log('🚀 ~ file: page.tsx:49 ~ onSubmit ~ response:', response);
        } catch (error) {
            toast.error('Erro ao adicionar receita ');
            console.log('🚀 ~ file: page.tsx:48 ~ onSubmit ~ error:', error);
        }

    }

    const handleFileChange = (name: any, file: any) => {
        setValue(name, file);
    };

    return (
        <div className="container m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-1 grid-cols-1 p-8">
                    <div className="mb-4 pr-6 border-r-2 border-[#61D9DE] ">
                        <div className="mb-4">
                            <p className="text-blue text-2xl font-medium">
                                Adicionar Receita
                            </p>
                            <p className=" text-blue text-base font-light">
                                "Gastronomia é a arte de usar comida para criar felicidade." - Theodore Zeldin.
                            </p>

                        </div>
                        <Input
                            title="Título"
                            placeholder="Insira o nome da sua receita"
                            type="text"
                            {...register('title')}
                        />
                        {errors.title && (
                            <span className="text-red-500">Campo obrigatório</span>
                        )}
                        <Input
                            title="Duração"
                            placeholder="Tempo de duração"
                            type="text"
                            {...register('duration')}
                        />
                        <Input
                            title="Rendimento"
                            placeholder="rende para ..."
                            type="text"
                            {...register('proceeds')}
                        />
                        <Input
                            title="Dificuldade"
                            placeholder="Nível de dificuldade"
                            type="text"
                            {...register('difficulty')}
                        />

                        <textarea
                            title="Ingredientes"
                            placeholder="Ingredients"
                            {...register('ingredients')}
                        />
                        <textarea
                            title="Mode de Preparo"
                            placeholder="Ingredients"
                            {...register('preparation')}
                        />

                        <p className=" text-blue text-base font-medium mb-4">
                            Selecione a categoria
                        </p>
                        <div className="grid grid-cols-5 gap-2">
                            {categories.elastic.map((categories) => (
                                <div className="text-blue" key={categories.id}>
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
                    <div className="mb-4 ml-4">
                        <p className="text-blue text-2xl font-medium">Adicionar Recieta</p>
                        <p className=" text-blue text-base font-light">
                            Deixe aqui registrada a sua felicidade! :)
                        </p>
                        <div className="my-4">
                            <p className="text-blue  text-base font-medium">Imagem</p>

                            <div className="w-full  h-80 bg-zinc-300 rounded-3xl shadow">
                                <InputFile
                                    {...register('image')}
                                    onChange={(e) => handleFileChange('image', e)}
                                />
                            </div>
                        </div>
                        <Button title="Cadastrar receita" />
                    </div>
                </div>
            </form>
        </div>
    )
}