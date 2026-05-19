"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Confidence",
    A: 92,
  },
  {
    subject: "Persuasion",
    A: 87,
  },
  {
    subject: "Empathy",
    A: 74,
  },
  {
    subject: "Professionalism",
    A: 90,
  },
  {
    subject: "Positivity",
    A: 81,
  },
];

export default function AuraRadar() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
      "
    >
      <p className="mb-6 text-sm uppercase tracking-wide text-neutral-400">
        Aura Analysis
      </p>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#444" />
            
            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: "#aaa",
                fontSize: 12,
              }}
            />

            <Radar
              name="Aura"
              dataKey="A"
              stroke="#ffffff"
              fill="#ffffff"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}