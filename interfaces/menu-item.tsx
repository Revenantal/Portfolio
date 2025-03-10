export default interface MenuItemInterface {
  key: string,
  href: string,
  target?: string,
  label: string,
  icon?: React.ReactNode,
  children?: MenuItemInterface[],
  prefetch?: boolean,
}