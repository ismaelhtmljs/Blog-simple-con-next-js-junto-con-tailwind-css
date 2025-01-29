import Header from '@/components/header/header'
import '@/css/style.css'

export default function Home() {

  const code_line_1 = '<div';
  const class_signo = '=';
  const class_red = 'class';
  const class_comment = '"bg-blue-500 text-white text-center p-4 rounded-lg"';
  const code_line_1_signal = '>';
  const code_line_2 = '¡Hola, Tailwind!';
  const code_line_3 = "</div>";

  return (
    <>
      <div className="UASL1">
        <div className="h-full flex flex-col gap-4">
        <Header />
          <div className="w-[78%] margin-auto">
            <main>
              <div className="contenedor-main">
                <div className="contenedor-post System-Txt">
                  {/* post 1 */}
                  <div className="post1">
                    {/* titulo */}
                    <section>
                      <h1 className='text-3xl'>Introducción a una Página Simple con Tailwind CSS y Next.js</h1>
                    </section>
                    <hr className=' mt-3 mb-2' />
                    {/* description */}
                    <section>
                      <div className="description-txt text-lg text-justify">
                        <p>Crear una página web con <em>Tailwind CSS</em> y <em>Next.js</em> es una excelente combinación para desarrollar aplicaciones modernas, rápidas y responsivas. Mientras que Next.js es un framework de React que facilita la creación de aplicaciones web con renderizado del lado del servidor <strong>(SSR)</strong> y generación de sitios estáticos <strong>(SSG)</strong>, <em>Tailwind CSS</em> ofrece un sistema de utilidades de diseño altamente personalizable para estilizar tu página de manera rápida y eficiente.</p>
                      </div>
                    </section>
                  </div>
                  {/* post2 */}
                  <div className="post2">
                    <section>
                      <h1 className='text-3xl'>¿Qué es Tailwind CSS?</h1>
                    </section>
                    {/*description */}
                    <hr className=' mt-3 mb-2' />
                    <section>
                      <div className="description-txt text-lg text-justify">
                        <p><strong>Tailwind CSS</strong> es un framework de diseño <strong>CSS utility-first</strong>. Esto significa que en lugar de escribir CSS personalizado para tus estilos, utilizas clases predefinidas que Tailwind ofrece para construir tus diseños directamente en el <em>HTML</em> o <em>JSX</em>.</p>
                      </div>
                    </section>
                    {/* seccion de caracteristicas */}
                    <section className='pl-[.325rem]'>
                      <div className="caracteristicas">
                        <p><strong>Características de Tailwind CSS:</strong></p>
                        <ol className=' list-decimal pl-[1.625em]'>
                          <li className='li'><p><strong>Utility-first:</strong></p><ul className='list-disc pl-[1.625em]'><li><p>Tailwind proporciona miles de clases CSS como p-4 (padding), text-center (alinear texto al centro), bg-blue-500 (fondo azul) y muchas más, permitiendo diseñar componentes sin escribir CSS adicional.</p></li></ul></li>
                          <li className='li'><p><strong>Altamente personalizable:</strong></p><ul className='list-disc pl-[1.625em]'><li><p>Puedes configurar colores, fuentes, espaciados y otras propiedades en el archivo tailwind.config.js.</p></li></ul></li>
                          <li className='li'><p><strong>Diseño responsivo fácil:</strong></p><ul className='list-disc pl-[1.625em]'><li><p>Tailwind tiene soporte integrado para diseño responsive, por ejemplo, sm:text-lg (texto más grande en pantallas pequeñas).</p></li></ul></li>
                          <li className='li'><p><strong>Estilos sin sobrescribir CSS:</strong></p><ul className='list-disc pl-[1.625em]'><li><p>Evitas conflictos de clases porque todo se maneja con clases utilitarias.</p></li></ul></li>
                          <li className='li'><p><strong>Desarrollo más rápido:</strong></p><ul className='list-disc pl-[1.625em]'><li><p>Diseñas directamente en el HTML/JSX, eliminando la necesidad de cambiar entre CSS y tu código.</p></li></ul></li>
                        </ol>
                      </div>
                    </section>
                    {/* seccion de codigo de ejemplo */}
                    <section>
                      <p>Ejemplo de código con Tailwind:</p>
                      <pre>
                        <div className="barra_ p-2 rounded-t-md pl-3">
                          html
                        </div>
                        <div className="code bg-black text-white p-3 rounded-b-md overflow-y-auto">
                          <code>
                            <span className='code-text'>
                              <p className='mb-[2px] mt-[2px]'>{code_line_1} <span className='text-red-500'>{class_red}</span><span>{class_signo}</span><span className='text-green-500'>{class_comment}</span><span>{code_line_1_signal}</span></p>
                              <p className='mb-[2px] mt-[2px] pl-4'>{code_line_2}</p>
                              <p className='mb-[2px] mt-[2px]'>{code_line_3}</p>
                            </span>
                          </code>
                        </div>
                      </pre>
                    </section>
                  </div>
                  {/*  */}
                </div>
              </div>
            </main>
          </div>
          {/* footer */}
        </div>
      </div>
    </>
  )
}