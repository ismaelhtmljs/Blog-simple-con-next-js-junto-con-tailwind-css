"use client"
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import '@/css/header/header.css';

export default function Header(){

    const [isMenuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    }

    return(
        <header className=' p-4 flex sticky top-0'>
            <div className=" w-full flex justify-between items-center max-sm:flex-col max-lg:flex-col gap-[15px]">
                <div className="titulo">
                    <h1 className='text-2xl playwrite max-sm:text-[17px]'>Practice Tailwind with Next js</h1>
                </div>
                <nav className="navbar max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col max-md:flex max-md:justify-center max-md:items-center max-md:flex-col">
                    <div className="menuToggle hidden max-sm:flex max-sm:items-center max-sm:gap-2">
                        <IoIosMenu className=' text-[22px] cursor-pointer' onClick={toggleMenu}></IoIosMenu>
                        <p>Menu</p>
                    </div>
                    <div className={`ul-contenedor${isMenuActive ? '-active' : ''}`}>
                        <ul className="ul-list list-none flex gap-4 font-sans max-sm:flex-col max-sm:text-center">
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="#">Página oficial de Tailwind Css</Link></li>
                            <li><Link href="#">Lista</Link></li>
                            <li><Link href="#">Repositorio del blog</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}