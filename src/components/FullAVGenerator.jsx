import React from "react";

function NeonWaveform() {
  const bars = Array.from({ length: 40 });
  return (
    <div style={{ display: "flex", gap: 4, marginTop: 30, marginBottom: 30, height: 80, alignItems: "flex-end" }}>
      {bars.map((_, i) => (
        <div key={i} style={{ width: 4, height: Math.random() * 80, backgroundColor: "#00ffcc", borderRadius: 2 }} />
      ))}
    </div>
  );
}

export default function FullAVGenerator() {
  const generateAV = () => {
    fetch('http://192.168.12.175:5000/audio/generate', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error("Fetch error:", err));
  };

  return (
    <div>
      <NeonWaveform />
      <button onClick={generateAV} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Generate Neon AV
      </button>
    </div>
  );
}
