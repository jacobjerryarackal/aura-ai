"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AuraInput() {
  const [text, setText] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mt-10 w-full max-w-3xl"
    >
      {/* Glass Card */}
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
        
        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a message, email, or conversation..."
          className="
            min-h-[180px]
            w-full
            resize-none
            rounded-2xl
            border
            border-white/10
            bg-black/40
            p-5
            text-lg
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-neutral-500
            focus:border-white/30
            focus:ring-2
            focus:ring-white/20
          "
        />

        {/* Bottom Row */}
        <div className="mt-5 flex items-center justify-between">
          
          {/* Character Count */}
          <p className="text-sm text-neutral-400">
            {text.length} characters
          </p>

          {/* Analyze Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              rounded-2xl
              bg-white
              px-6
              py-3
              font-semibold
              text-black
              shadow-lg
              transition-all
              duration-300
              hover:shadow-white/20
            "
          >
            Analyze Aura
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}