"use client";

import MenuItem from '@/interfaces/menu-item';
import DropdownSubmenu from './dropdown-submenu';
import { useState } from 'react';
import Link from 'next/link';

export default function Dropdown({
  menuItem
}: {
  menuItem: MenuItem
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div key={menuItem.key} className="relative  px-2 rounded flex flex-row items-center cursor-default hover:bg-background-light"
        onClick={() => setOpen(!open)}
        onMouseLeave={() => setOpen(false)}>
        {menuItem.label}
        <div className={`absolute bg-background py-2 top-full left-0 min-w-3xs rounded-lg border shadow-lg ${open ? 'block' : 'hidden'}`}>
          <div className="flex flex-col">
            {menuItem.children && menuItem.children.map((menuItem) => {
              return menuItem.children ? (
                <DropdownSubmenu menuItem={menuItem} key={menuItem.key} />
              ) : (
                <Link href={menuItem.href} target={menuItem.target} key={menuItem.key} prefetch={menuItem.prefetch ?? true} className="flex flex-row gap-1 items-center px-5 py-1 hover:bg-brand rounded mx-1">
                  <div>{menuItem.label}</div>
                </Link>
              )
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}