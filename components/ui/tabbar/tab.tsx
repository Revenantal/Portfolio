"use client";

import { usePathname } from 'next/navigation';
import { FaHtml5 } from "react-icons/fa6";

export default function Tab() {
    const pathname = usePathname().split("/").pop() || 'index';
    return (
        <div className="flex flex-row items-center border-t-1 border-brand p-2 px-4">
            <FaHtml5 className="text-orange-500 me-2"/> {pathname}.html
        </div>
    )
}