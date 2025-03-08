"use client";

import MenuItem from "./menu-item";
import { MenuItem as MenuItemType } from "interfaces/menu-item";
import { FaFilePdf } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiFolderOpenFill } from "react-icons/ri";
import { useSidebar } from "../sidebar-provider";
import Resizer from "../resizer";

export default function TreeSidebar({
  menu
}: {
  menu?: MenuItemType[]
}) {

  const { width } = useSidebar();

  const getIcon = (label: string) => {
    switch (label.slice(label.lastIndexOf('.'))) {
      case '.html':
        return <FaHtml5 className="text-orange-500" />
      case '.pdf':
        return <FaFilePdf className="text-red-400" />
      default:
        return <RiFolderOpenFill className="text-yellow-400" />
    }
    return null;
  }

  return (
    <div className="flex flex-col flex-1 relative overflow-clip text-nowrap" style={{ width: width }}>
      <Resizer />
      <div className="px-3 py-4 font-bold ">Adrian&apos;s Portfolio</div>
      {menu?.map(({ href, target, label, children, key }) => (
        <div key={key}>
          <MenuItem
            href={href}
            target={target || "_self"}
            title={label}>

            <div className="flex flex-row items-center px-3">
              <span className="me-2">{getIcon(label)}</span> {label}
            </div>
          </MenuItem>

          {children && (
            <>
              <div className="flex flex-col">
                {children.map(({ href, target, label, key }: MenuItemType) => (
                  <MenuItem key={key}
                    href={href}
                    target={target || "_self"}
                    title={label}>

                    <div className="flex flex-row items-center ms-5">
                      <span className="me-2">{getIcon(label)}</span> {label}
                    </div>
                  </MenuItem>
                ))}
              </div>
            </>
          )}
        </div>

      ))}
    </div>
  )
}
