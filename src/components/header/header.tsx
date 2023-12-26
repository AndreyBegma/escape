import lora from "@/fonts/lora";
import oxygen from "@/fonts/oxygen";

import Link from "next/link";

import classNames from "classnames";

import { FC } from "react";

const Header: FC = () => {
    const linkStyle = classNames(
        'text-xs',
        'text-white',
        'uppercase',
        oxygen.className
    )
    return (
        <header className="w-full h-header bg-header bg-no-repeat bg-center bg-cover">
            <div className="pt-5 mx-auto w-container flex justify-between items-center">
                <h2 
                    className="text-white text-2xl"
                    style={lora.style}
                >Escape.</h2>
                <nav className="space-x-10">
                    <Link className={linkStyle} href={'#'}>home</Link>
                    <Link className={linkStyle} href={'#'}>categories</Link>
                    <Link className={linkStyle} href={'#'}>about</Link>
                    <Link className={linkStyle} href={'#'}>contact</Link>
                </nav>
            </div>
            <div className="mt-32">
                <h1 
                    style={lora.style} 
                    className="text-title text-center text-white"
                >
                    Let's do it together.
                </h1>
                <p style={oxygen.style} className="mt-5 text-center text-gray text-lg">
                    We travel the world in search of stories. Come along for the ride.
                </p>
                <button className="cursor-pointer bg-orange py-3.5 px-8 mx-auto mt-8 block">
                    <span style={oxygen.style} className="text-white text-sm">View Latest Posts</span>
                </button>
            </div>
        </header>
    )
}

export default Header