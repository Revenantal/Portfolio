import Link from "next/link";
import { VscSourceControl, VscTerminal } from "react-icons/vsc";
import ToggleTerminal from "./console/toggle-terminal";

export default function Footer() {
  return (
      <div className="flex flex-row w-full px-2 gap-1">
        <Link target="_blank" href="https://github.com/Revenantal" className="flex flex-row items-center text-sm p-1 cursor-pointer hover:bg-background-light">
          <VscSourceControl className="me-1 text-base"/> master
        </Link>
        <ToggleTerminal className="flex flex-row items-center text-sm p-1 cursor-pointer hover:bg-background-light select-none">
          <VscTerminal className="me-1 text-base "/> Terminal
        </ToggleTerminal>

      </div>
    )
}
