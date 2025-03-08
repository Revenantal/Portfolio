"use client";

import { usePathname } from 'next/navigation'
import { useEffect, useCallback } from 'react';
import { useConsoleTray } from './console-tray-provider';


export default function LogWindow() {
  const { log, setLog } = useConsoleTray();
  const pathname = usePathname();

  const updateLog = useCallback(() => {
    setLog([...log, pathname]);
  }, [setLog, log, pathname]);

  useEffect(() => {
    updateLog();
  }, [updateLog])


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