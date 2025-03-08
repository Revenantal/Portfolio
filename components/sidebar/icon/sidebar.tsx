import MenuItem from "./menu-item";
import MenuItemInterface from "@/interfaces/menu-item";

export default async function IconSidebar({
  primaryMenu,
  secondaryMenu,
}: {
  primaryMenu?: MenuItemInterface[],
  secondaryMenu?: MenuItemInterface[],
}) {

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        {primaryMenu?.map(({ href, target, label, icon }, index) => (
          <MenuItem key={index}
            href={href}
            label={label}
            target={target || "_self"}
            title={label}>
            {icon}
          </MenuItem>
        ))}
      </div>
      <div className="flex flex-col">
        {secondaryMenu?.map(({ href, target, label, icon }, index) => (
          <MenuItem key={index}
            href={href}
            label={label}
            target={target || "_self"}
            title={label}>
            {icon}
          </MenuItem>
        ))}
      </div>
    </div>
  )
}