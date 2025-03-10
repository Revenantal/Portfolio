"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function MenuItem({
  href,
  children,
  prefetch,
  ...rest
}: {
  href: string,
  icon?: React.ReactNode,
  prefetch?: boolean,
  children?: React.ReactNode,
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {

  console.log(prefetch);
  const pathname = usePathname();
  return (
    <>
      {prefetch === false ?
        <a href={href}
          className={(pathname == href ? "bg-white/10" : "") + " flex border-1 border-transparent hover:bg-white/5 active:bg-brand/50 active:border-brand"}
          {...rest}>
          {children}
        </a>
      :
        <Link href={href}
          className={(pathname == href ? "bg-white/10" : "") + " flex border-1 border-transparent hover:bg-white/5 active:bg-brand/50 active:border-brand"}
          {...rest}>
          {children}
        </Link>
      }
    </>
  );
}