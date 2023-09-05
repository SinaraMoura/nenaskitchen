import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full h-[36px] fixed bottom-0 items-center bg-color-primary flex  flex-col justify-center text-white py-7">
            <p>Nena`s Ticken ® {new Date().getFullYear()} | Todos os Direitos Reservados</p>
            <p>Desenvolvido com 🧡 por Sinara Tibel</p>
        </div>
    )
}