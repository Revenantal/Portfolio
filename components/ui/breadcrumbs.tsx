"use client";

import { usePathname } from 'next/navigation';
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';

export default function Breadcrumbs() {
    const pathname = usePathname().split("/").filter(x => x);

    const currentPathname = (index:number): string => {
        return pathname.slice(0, index + 1).join("/");
    };

    return (
        <div className="flex text-white/50 text-sm items-center py-1">
            <Link href="/" className="flex hover:text-white transition">
                <span>app</span>
            </Link>
            {pathname.map((path, index) => {
                return (
                    <div key={index} className="flex items-center">
                        <FaAngleRight className="mx-1" />
                        <Link href={currentPathname(index)} className=" hover:text-white transition">
                            {path}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}