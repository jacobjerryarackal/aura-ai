"use client";

import { motion } from "framer-motion";

export default function ConfidenceRing() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-10
        backdrop-blur-xl
      "
    >
      <p className="mb-6 text-sm uppercase tracking-wide text-neutral-400">
        Confidence Index
      </p>

      <div className="relative flex items-center justify-center">
        
        {/* Outer Ring */}
        <div className="h-44 w-44 rounded-full border border-white/10" />

        {/* Animated Ring */}
        <motion.div
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            h-44
            w-44
            rounded-full
            border-t-2
            border-white
          "
        />

        {/* Center */}
        <div className="absolute flex flex-col items-center">
          <h2 className="text-5xl font-bold text-white">
            92%
          </h2>

          <p className="mt-2 text-sm text-neutral-400">
            Strong
          </p>
        </div>
      </div>
    </div>
  );
}