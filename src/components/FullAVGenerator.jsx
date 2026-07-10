import React, { useState } from "react";
import useFullAV from "../hooks/useFullAV";

/* --- NEON WAVEFORM VISUALIZER --- */
function NeonWaveform() {
  const bars = Array.from({ length: 40 });

  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        marginTop: 30,
        marginBottom: 30,
        height: 80,
        alignItems: "flex-end"
      }}
    >
      {bars.map((_, i) => (
        <div
          key={i}
          style={{
            width: 4,
            height: Math.random() * 80,
            backgroundColor: "#00ffcc",
            borderRadius: 2
          }}
        />
      ))}
    </div>
  );
}

export default function FullAVGenerator() {
  return (
    <div>
      <NeonWaveform />
      <button 
        onClick={() => fetch('http://localhost:5000/api/generate', { method: 'POST' })}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Generate Neon AV
      </button>
    </div>
  );
}
