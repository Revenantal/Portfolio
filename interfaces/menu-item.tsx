export default interface MenuItem {
    key: string,
    href: string,
    target: string,
    label: string,
    icon: React.ReactNode,
    children?: MenuItem[],
}