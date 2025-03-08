import Logo from "../logo";
import {TopBarMenuLeft} from "../../data/menus";
import Menu from "./menubar/menu";
import FullscreenButton from "./buttons/fullscreen";
import CloseButton from "./buttons/close";

export default async function TopBar() {
    return (
        <div className="flex flex-row flex-1 z-2">
            <div className="text-brand font-bold p-2">
                <Logo />
            </div>
            <div className="flex flex-row flex-1 justify-between">
                <div className="flex flex-row gap-1 p-2">
                    <Menu menuItems={TopBarMenuLeft}/>
                </div>
                <div className="flex flex-row">
                    <FullscreenButton />
                    <CloseButton />
                </div>
            </div>
        </div>
    )
}