import Tab from "./tab";

export default async function TabBar() {
    return (
        <div className="flex flex-row flex-1">
            <div className="flex border-r-1">
                <Tab /> 
            </div>
            <div className="border-b-1 flex-1"></div>
        </div>
    )
}