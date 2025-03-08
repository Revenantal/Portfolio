"use client";

import { motion } from "motion/react"

export default function ProgressBar({
  percentage, 
  length = 10
}: {
  percentage: number;
  length?: number;
}) {


  const progress = Math.round((percentage / 100) * length);

  const bar = {
    visible: {     
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children by .3 seconds
      }
    }
  };

  const barTick = {
    visible: { 
      filter: "grayscale(0%)",
      transition: {
        duration: 0.1 
      }
    },
    hidden: { 
      filter: "grayscale(100%)",
      transition: {
        duration: 0.1 
      }
    },
  };


  return (
    <div className="progress-bar">
      [ 
        <motion.div 
          className="inline-block"     
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bar}>

          {[...Array(length)].map((_, i) => (
            <motion.span
              key={i}
              className={"inline-block " + (i <= progress ? "text-brand" : "text-gray-500")}
              variants={barTick}
              style={{ originX: 0 }}
            >
              =
            </motion.span>
          ))}
          </motion.div>
        ]
        <span className="ms-3">{String(percentage).padStart(3, '_')}%</span>
    </div>
  );
}