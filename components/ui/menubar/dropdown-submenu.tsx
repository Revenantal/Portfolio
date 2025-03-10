"use client";

import MenuItem from '@/interfaces/menu-item';
import Link from 'next/link';
import { GoChevronRight } from "react-icons/go";

export default function DropdownSubmenu({
  menuItem
}: {
  menuItem: MenuItem
  }) {
  return (
    <>
      <div key={menuItem.key} className="flex flex-row gap-1 items-center justify-between px-5 py-1 relative hover:bg-brand rounded mx-1 group">
        <Link href={menuItem.href} target={menuItem.target} className="flex flex-row gap-1 items-center justify-between w-full">
          {menuItem.label}
          <GoChevronRight />
        </Link>
        <div className="absolute bg-background py-2 -top-2 left-[100%] min-w-3xs rounded-lg border not-group-hover:hidden shadow-lg">

          {menuItem.children && menuItem.children.map((menuItem) => {
            return menuItem.children ? (
              <DropdownSubmenu menuItem={menuItem} />
            ) : (
              <Link href={menuItem.href} target={menuItem.target} key={menuItem.key} prefetch={menuItem.prefetch ?? true} className="flex flex-row gap-1 items-center px-5 py-1 hover:bg-brand rounded mx-1">
                <div>{menuItem.label}</div>
              </Link>
            )
          })
          }
        </div>
      </div>
    </>
  )
}