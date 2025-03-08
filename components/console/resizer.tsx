"use client";

import React from 'react';
import { useConsoleTray } from './console-tray-provider';

export default function Resizer() {
    
    const { height, setHeight } = useConsoleTray();

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();

        const initialY = e.clientY;
        const startingY = height;

        const handleMouseMove = (e: MouseEvent) => {
            const diff = e.clientY - initialY;
            setHeight(startingY - diff);
        }

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    return (
        <div className="absolute top-0 right-0 left-0 h-1 cursor-ns-resize" onMouseDown={handleMouseDown} />
    )
}