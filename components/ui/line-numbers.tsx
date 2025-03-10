"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname } from 'next/navigation'
export default function LineNumber() {

  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [lines, setLines] = useState(0);
  const lineHeight = 24;

  const handleResize = useDebouncedCallback(() => {
    setLines(Math.floor(ref.current!.clientHeight / lineHeight));
  }, 100);


  useEffect(() => {
    setLines(Math.floor(ref.current!.clientHeight / lineHeight));
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('routeChangeStart', handleResize)
    }
  }, [handleResize]);
  

  useEffect(() => {
    setLines(Math.floor(ref.current!.clientHeight / lineHeight));
  }, [pathname])

  return (
    <div className="relative w-10 me-5 text-end select-none" aria-hidden="true">
      <div className="flex flex-col opacity-25 text-right select-none h-full absolute w-full" ref={ref}>
          <div className="absolute w-full">
          {[...Array(lines)].map((_, i) => (
            <div key={i} style={{height: lineHeight + "px"}}>
              {i + 1}
            </div>
          ))}
          </div>
        </div>
    </div>
  );
}