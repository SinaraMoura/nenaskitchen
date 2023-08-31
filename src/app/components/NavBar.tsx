import Image from "next/image";
import { Input } from "./Input";
import NavLink from "./NavLink";


export function NavBar() {
    return (
        <div className=" bg-brown-primary px-5 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
            />

            <div className="w-full flex flex-col justify-center">
                <div className=" flex space-x-4 pb-8">
                    <div className="flex space-x-4 ">
                        <ul className="flex space-x-4 ">
                            <NavLink
                                title="Dashbord"
                                path="/"
                            />
                            <NavLink
                                title="Receitas"
                                path="/recipes"
                            />
                            <NavLink
                                title="Artigos"
                                path="/articles"
                            />
                        </ul>

                    </div>
                </div>
                {/* <Input
                    placeholder="O que vamos comer hoje ?"
                    type="text"
                /> */}


            </div>
        </div >
    )
}