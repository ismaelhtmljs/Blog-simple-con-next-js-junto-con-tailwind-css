import Header from "@/components/header/header";
import Link from "next/link";

export default function List(){
    return(
        <div className="">
            <div className="h-full flex flex-col gap-20">
                <Header/>
                <div className="w-[78%] margin-auto">
                    <main>
                        <div className="contenedor-main-list">
                            <div className="contenedor-blog-List">
                                <div className="list">
                                    <div className="1part">
                                        <ul className="text-xl list-disc">
                                            <li><Link href="/">Inicio</Link></li>
                                            <li><Link href="/sections/pages/pagina-oficial">Página Oficial</Link></li>
                                            <li><Link href="https://github.com/ismaelhtmljs/Blog-simple-con-next-js-junto-con-tailwind-css">Repositorio del Blog</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}