"use client";

import { Spotlight } from "@/components/ui/spotlight";
import {Particles} from "@/components/ui/particles";

export default function Home() {
  return (
    <main className="relative flex h-screen overflow-hidden bg-black">
      
      <Particles
        className="absolute inset-0"
        quantity={100}
      />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        
        <h1 className="text-7xl font-bold text-white">
          Aura AI
        </h1>

        <p className="mt-4 text-xl text-neutral-400">
          Decode human communication instantly.
        </p>

      </div>
    </main>
  );
}