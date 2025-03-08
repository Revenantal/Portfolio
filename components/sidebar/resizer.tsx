/**
 * TODO: Combine this with the console resizer
 */

"use client";

import React from 'react';
import { useSidebar } from './sidebar-provider';

export default function Resizer() {
    
    const { width, setWidth } = useSidebar();

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();

        const initialX = e.clientX;
        const startingX = width;

        const handleMouseMove = (e: MouseEvent) => {
            const diff = e.clientX - initialX;
            setWidth(startingX + diff);
        }

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    return (
        <div className="absolute top-0 right-0 bottom-0 w-1 cursor-ew-resize" onMouseDown={handleMouseDown} />
    )
}