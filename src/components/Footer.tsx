import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full h-[36px] fixed bottom-0 items-center bg-backing-color-4 flex  flex-col justify-center text-scale-gray-7 py-7 font-medium sm:items-stretch md:items-center lg:item-center xl:items-center 2xl:item-center">
            <p>Nena's Ticken ® {new Date().getFullYear()} | Todos os Direitos Reservados</p>
            <p>Desenvolvido com 🧡 por Sinara Tibel</p>
        </div>
    )
}