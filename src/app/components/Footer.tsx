import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full h-[26px] fixed bottom-0 items-center bg-brown-primary flex justify-center text-white pr-32">
            <p>Nena`s Ticken ® {new Date().getFullYear()} | Todos os Direitos Reservados</p>
        </div>
    )
}