import '@/css/footer/footer.css'

export default function Footer(){
    return(
        <footer>
            <div className="contenedor-footer text-center">
                <div className="repo">
                    <p>Repositorio de Github : <a className="RepoEnlace" href="https://github.com/ismaelhtmljs/Blog-simple-con-next-js-junto-con-tailwind-css">Ir al Repositorio</a></p>
                </div>
                <div className="copy">
                    <p>&copy;CopyRight by Ismaelxd74 | official License from 2024-2058</p>
                </div>
            </div>
        </footer>
    )
}