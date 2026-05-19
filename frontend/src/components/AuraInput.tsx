"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuraInput() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setShowResults(false);

    try {
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
        }),
      });

      const data = await response.json();

      console.log(data);

      setLoading(false);
      setShowResults(true);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 mt-10 w-full max-w-4xl">
      
      {/* Input Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          shadow-2xl
          backdrop-blur-xl
        "
      >
        
        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a message, email, LinkedIn post, or conversation..."
          className="
            min-h-[200px]
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
          <div className="flex items-center gap-3">
            <p className="text-sm text-neutral-400">
              {text.length} characters
            </p>

            {text.length > 0 && (
              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-green-400"
              />
            )}
          </div>

          {/* Analyze Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={handleAnalyze}
            disabled={loading}
            className="
              rounded-2xl
              bg-white
              px-7
              py-3
              font-semibold
              text-black
              shadow-lg
              transition-all
              duration-300
              hover:shadow-white/20
              disabled:opacity-70
            "
          >
            {loading ? "Analyzing..." : "Analyze Aura"}
          </motion.button>
        </div>
      </motion.div>

      {/* AI Thinking State */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="
              mt-8
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-4">
              
              {/* Animated Pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="h-4 w-4 rounded-full bg-white"
              />

              <div>
                <p className="text-lg font-medium text-white">
                  AI is decoding communication patterns...
                </p>

                <p className="mt-1 text-sm text-neutral-400">
                  Analyzing emotion, tone, persuasion, and confidence.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            
            {/* Card 1 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm text-neutral-400">
                Communication Tone
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Confident
              </h2>

              <p className="mt-2 text-neutral-400">
                Your communication style feels assertive and persuasive.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm text-neutral-400">
                Emotional Energy
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Positive
              </h2>

              <p className="mt-2 text-neutral-400">
                The message conveys optimism and engagement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm text-neutral-400">
                Persuasion Level
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                87%
              </h2>

              <p className="mt-2 text-neutral-400">
                Strong emotional and logical influence detected.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm text-neutral-400">
                Confidence Score
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                High
              </h2>

              <p className="mt-2 text-neutral-400">
                The writing demonstrates certainty and authority.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}