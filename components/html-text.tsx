export default function HtmlText({ 
    htmlTag, 
    children,
    ...rest
}: { 
    htmlTag: string, 
    children?: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <>
        <span {...rest}>
            <span className="text-[75%] mx-1 text-gray-500 opacity-75">{'<'}<span className="text-blue-500">{htmlTag}</span>{'>'}</span>
                {children}
            <span className="text-[75%] mx-1 text-gray-500 opacity-75">{'</'}<span className="text-blue-500">{htmlTag}</span>{'>'}</span>
        </span> 
    </>
  );
}