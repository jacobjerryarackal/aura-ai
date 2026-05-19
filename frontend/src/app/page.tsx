"use client";

import { Spotlight } from "@/components/ui/spotlight";
import {Particles} from "@/components/ui/particles";
import AuraInput from "@/components/AuraInput";

export default function Home() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-black px-6">
      
      {/* Particles */}
      <Particles
        className="absolute inset-0"
        quantity={120}
      />

      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-40 md:-top-20"
        fill="white"
      />

      {/* Main Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        
        {/* Heading */}
        <h1 className="text-center text-7xl font-bold tracking-tight text-white md:text-8xl">
          Aura AI
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-center text-lg text-neutral-400 md:text-xl">
          Decode hidden emotions, confidence, persuasion,
          and communication patterns instantly using AI.
        </p>

        {/* Input Component */}
        <AuraInput />
      </div>
    </main>
  );
}