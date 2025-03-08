import { VscTrash, VscClose } from "react-icons/vsc";
import { useConsoleTray } from './console-tray-provider';
import ToggleTerminal from './toggle-terminal';



export default function ControlBar() {

    const { setLog } = useConsoleTray();

    return (
        <div className="flex flex-row justify-between pe-2">
            <div className="flex flex-row gap-2 text-xs uppercase">
                <div>
                    <div className="border-b-1 border-brand">
                        Terminal
                    </div>
                </div>

            </div>
            <div className="flex flex-row gap-1 uppercase">
                <div className="p-1 cursor-pointer hover:bg-background-light rounded"
                    onClick={() => {
                        setLog([]);
                    }}>
                    <VscTrash />
                </div>
                <ToggleTerminal className="p-1 cursor-pointer hover:bg-background-light rounded">
                    <VscClose />
                </ToggleTerminal>
            </div>


        </div>
    )
}