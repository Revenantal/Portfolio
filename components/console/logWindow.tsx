"use client";

import { usePathname } from 'next/navigation'
import { useEffect } from 'react';
import { useConsoleTray } from './console-tray-provider';


export default function LogWindow() {
  const { log, setLog } = useConsoleTray() as { log: string[], setLog: React.Dispatch<React.SetStateAction<string[]>> };
  const pathname = usePathname();

  useEffect(() => {
    setLog((prevLog: string[]) => [...prevLog, pathname]);
  }, [pathname, setLog]);

  return (
    <div className="text-sm px-3 overflow-y-auto flex flex-col-reverse custom-scrollbar">
      <div>
        {log.map((log, i) => (
          <div key={i}>
            GET {log} <span className="text-green-500">200</span>
          </div>
        ))}
      </div>
    </div>
  )
}