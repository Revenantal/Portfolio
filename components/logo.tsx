"use client";

import { motion } from "motion/react"
import Link from "next/link"

export default function Logo() {
  return (
    <>
    <motion.div 
        className="text-xl flex cursor-pointer" 
          initial="hidden"
          whileHover="visible"
        transition={{ type: 'spring', stiffness: 300 }}
    >
        {'<'}
        <Link href="/" className="text-white flex">
            A
            <motion.span 
                className="inline-block overflow-hidden"
                variants={{ 
                    hidden: { width: 0 },
                    visible: { width: "auto" }
                }}
            >drian_</motion.span>
            B
            <motion.span 
                className="inline-block overflow-hidden"
                variants={{ 
                    hidden: { width: 0 },
                    visible: { width: "auto" }
                }}
  
            >radley</motion.span>
        </Link>
        {'>'}
    </motion.div>
    </>
  );
}