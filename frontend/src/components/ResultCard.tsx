"use client";

import { motion } from "framer-motion";

interface ResultCardProps {
  title: string;
  value: string;
  description: string;
  accent: string;
  delay?: number;
}

export default function ResultCard({
  title,
  value,
  description,
  accent,
  delay = 0,
}: ResultCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
      "
    >
      {/* Glow */}
      <div
        className={`
          absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500
          group-hover:opacity-20 ${accent}
        `}
      />

      {/* Gradient Border */}
      <div
        className={`
          absolute inset-0 rounded-3xl opacity-20
          bg-gradient-to-br ${accent}
        `}
      />

      {/* Content */}
      <div className="relative z-10">
        
        <p className="text-sm tracking-wide text-neutral-400 uppercase">
          {title}
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          {value}
        </h2>

        <p className="mt-4 leading-relaxed text-neutral-400">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{
              duration: 1.5,
              delay: delay + 0.3,
            }}
            className={`
              h-full rounded-full bg-gradient-to-r ${accent}
            `}
          />
        </div>
      </div>
    </motion.div>
  );
}