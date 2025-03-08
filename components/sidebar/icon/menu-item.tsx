"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { TreeSidebarMenu } from "@/data/menus";

export default function MenuItem({ 
    href,
    label,
    children,
    ...rest
} : { 
    href: string,
    label: string,
    children?: React.ReactNode,
 } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const pathname = usePathname();


    const isActive = (): boolean => {
        if (pathname === href) {
            return true;
        }

        if (label == 'Explorer') {
            for (const menuItem of TreeSidebarMenu) {
                if (menuItem.href === pathname) {
                    return true;
                }
                if (menuItem.children) {
                    for (const childItem of menuItem.children) {
                        if (childItem.href === pathname) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };

    return (
        <Link href={href} 
            className={(isActive() ?  "border-brand text-current" : "text-current/50 border-transparent") + " text-3xl hover:text-current transition p-3 border-l-2"}
            {...rest}>
            { children }
        </Link>
    );
}