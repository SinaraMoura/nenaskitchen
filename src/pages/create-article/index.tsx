'use client';
import { Input } from "../../components/Form/Input";
import { InputFile } from "../../components/Form/InputFile";
import { useForm } from 'react-hook-form';
import { Button } from "../../components/Form/Button";
import { toast } from 'react-toastify';
import FormData from 'form-data';
import { api } from '../../utils/api';

export default function CreateArticles() {
    interface IFormProps {
        title: string;
        description: string;
        text: string;
        date: string;
        image: File;
    }
    const {
        register,
        handleSubmit,
        setValue
    } = useForm<IFormProps>();

    const onSubmit = async (data: IFormProps) => {
        try {
            const formattedDate = new Date();
            const formData = new FormData();

            const formattedText = data.text.split('\n')

            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('te', formattedDate.toISOString());
            formData.append('image', data.image);


            formattedText.forEach((text, index) => {
                formData.append(`text[${index}]`, text);
            })


            await api.post(`/articles`, formData);
            toast.success('Artigo adicionado com sucesso!');
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
        }

    }
    const handleFileChange = (name: any, file: any) => {
        setValue(name, file);
    };
    return (
        <div className="container m-auto mb-12 sm:items-stretch md:items-center lg:item-center xl:items-center 2xl:item-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-1 grid-cols-1 p-8">
                    <div className="mb-4 pr-6 border-r-0 border-color-secundary-1 sm:border-r-0 md:border-r-2 lg:border-r-2">
                        <div className="mb-4">
                            <p className="text-scale-gray-7 text-2xl font-medium">
                                Adicionar Artigo
                            </p>
                            <p className=" text-backing-color-3 text-base font-semibold">
                                "Aprendemos a cozinhar com a memória dos outros." - Jean-François Piège.
                            </p>

                        </div>
                        <Input
                            title="Título"
                            placeholder="Insira o nome do seu artigo"
                            type="text"
                            {...register('title')}
                        />

                        <Input
                            title="Descrição"
                            placeholder="Breve descrição do seu artigo"
                            type="text"
                            {...register('description')}
                        />

                        <label className="mb-4 text-scale-gray-6 font-medium">Conteúdo</label>
                        <textarea
                            className="w-full text-scale-gray-6 px-6 py-[5px] font-medium bg-white rounded-lg border border-color-secundary-1"
                            title="Text"
                            placeholder="Obs.: Separar os items com vírgula e quebrar a linha"
                            {...register('text')}
                        />

                    </div>
                    <div className=" mb-4 ml-0 sm:ml-4 md:ml-4 sm:items-stretch md:items-center lg:item-center xl:items-center 2xl:item-center">
                        <p className="text-scale-gray-7 text-2xl font-medium">Adicionar Artigo</p>
                        <p className="text-backing-color-3 text-base font-semibold">
                            Cozinhar é fazer poesia para ser degustada ! :)
                        </p>
                        <div className="h-[90%] flex flex-col place-content-between">
                            <div className="my-4">
                                <p className="text-scale-gray-7 text-base font-medium mb-4">Imagem</p>

                                <div className="w-full  h-80 bg-zinc-300 rounded-3xl shadow mb-11">
                                    <InputFile
                                        {...register('image')}
                                        onChange={(e) => handleFileChange('image', e)}
                                    />
                                </div>
                            </div>
                            <Button title="Cadastrar artigo" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}