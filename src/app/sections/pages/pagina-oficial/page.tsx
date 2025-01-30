import Header from "@/components/header/header"

export default function Pag_Oficial() {
    return (
        <>
            <div className="HASQ2 h-screen">
                <div className="h-full flex flex-col gap-20">
                    <Header/>
                    <div className="w-[78%] margin-auto">
                        <main>
                            <div className="contenedor-main">
                                <div className="contenedor-blog">
                                    <div className="post1">
                                        <section>
                                            <h1 className="text-3xl">Enlace a la página oficial de <strong>Tailwind CSS</strong></h1>
                                        </section>
                                        <hr className="mt-3 mb-2"/>
                                        <section>
                                            <div className="description-text-post1">
                                                <p className="text-[25px]">Si quieres descubrir el poder del diseño moderno con clases utilitarias y optimización avanzada, visita la página oficial de <strong>Tailwind CSS</strong>, donde encontrarás documentación detallada, ejemplos prácticos y todo lo necesario para llevar tus proyectos al siguiente nivel. No pierdas la oportunidad de explorar esta increíble herramienta aquí: <a href="https://tailwindcss.com/" className="text-cyan-500">https://tailwindcss.com</a></p>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}