import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import lora from "@/fonts/lora";

const Nav: FC = () => {
    const linkStyle = classNames(
        "text-darkGray",
        "text-sm",
        lora.className
    )
    return (
        <nav className="w-container h-16 mx-auto flex items-center justify-between">
            <Link className={linkStyle} href="#">Nature</Link>
            <Link className={linkStyle} href="#">Photography</Link>
            <Link className={linkStyle} href="#">Relaxation</Link>
            <Link className={linkStyle} href="#">Vacation</Link>
            <Link className={linkStyle} href="#">Travel</Link>
            <Link className={linkStyle} href="#">Adventure</Link>
        </nav>

    )
}

export default Nav