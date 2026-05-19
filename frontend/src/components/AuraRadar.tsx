"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface AuraRadarProps {
  analysis: any;
}

export default function AuraRadar({
  analysis,
}: AuraRadarProps) {

  const data = [
    {
      subject: "Confidence",
      A: analysis?.confidence_score || 0,
    },
    {
      subject: "Persuasion",
      A: analysis?.persuasion_level || 0,
    },
    {
      subject: "Empathy",
      A: analysis?.empathy_score || 0,
    },
    {
      subject: "Professionalism",
      A: analysis?.professionalism_score || 0,
    },
    {
      subject: "Positivity",
      A: analysis?.positivity_score || 0,
    },
  ];
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