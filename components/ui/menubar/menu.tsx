import MenuItem from '@/interfaces/menu-item';
import Dropdown from './dropdown';
export default function Menu({
    menuItems
} : {
    menuItems: MenuItem[]
}) {
    return (
        <>
            {menuItems.map((menuItem) => {
                return (
                    <Dropdown menuItem={menuItem} key={menuItem.key}/>
                )
            })}
        </>
    )
}