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
            width: 6,
            height: `${Math.random() * 70 + 10}px`,
            background: "linear-gradient(180deg, #ff00ff, #4a00e0, #00e5ff)",
            boxShadow: "0 0 12px #ff00ff, 0 0 20px #4a00e0",
            borderRadius: 4,
            animation: `wavePulse ${0.5 + Math.random()}s ease-in-out infinite`
          }}
        />
      ))}
    </div>
  );
}

/* --- NEON EQUALIZER (Vertical Bars) --- */
function NeonEqualizer() {
  const bars = Array.from({ length: 60 });

  return (
    <div
      style={{
        display: "flex",
        gap: 3,
        marginTop: 20,
        marginBottom: 40,
        height: 120,
        alignItems: "flex-end",
        justifyContent: "center"
      }}
    >
      {bars.map((_, i) => (
        <div
          key={i}
          style={{
            width: 5,
            height: `${Math.random() * 110 + 10}px`,
            background: "linear-gradient(180deg, #00e5ff, #4a00e0, #ff00ff)",
            boxShadow: "0 0 15px #00e5ff, 0 0 25px #4a00e0",
            borderRadius: 3,
            animation: `equalizerPulse ${0.3 + Math.random()}s ease-in-out infinite`
          }}
        />
      ))}
    </div>
  );
}

/* --- TRON GRID FLOOR EFFECT --- */
function TronGrid() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "40vh",
        backgroundImage: `
          linear-gradient(#00e5ff 1px, transparent 1px),
          linear-gradient(90deg, #00e5ff 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        opacity: 0.25,
        transform: "perspective(600px) rotateX(60deg)",
        animation: "gridMove 12s linear infinite",
        zIndex: -1
      }}
    ></div>
  );
}

export default function FullAVGenerator() {
  const { loading, result, error, createFullAV } = useFullAV();

  const [videoPrompt, setVideoPrompt] = useState("");
  const [audioPrompt, setAudioPrompt] = useState("");

  async function handleGenerate() {
    await createFullAV({
      videoPrompt,
      audioPrompt,
      duration: 10,
      resolution: "1080p",
      style: "cyberpunk-neon"
    });
  }

  const animationCSS = `
    @keyframes neonFlicker {
      0% { opacity: 1; }
      5% { opacity: 0.6; }
      10% { opacity: 1; }
      15% { opacity: 0.7; }
      20% { opacity: 1; }
      25% { opacity: 0.5; }
      30% { opacity: 1; }
      100% { opacity: 1; }
    }

    @keyframes synthwaveBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes wavePulse {
      0% { transform: scaleY(0.4); opacity: 0.7; }
      50% { transform: scaleY(1); opacity: 1; }
      100% { transform: scaleY(0.4); opacity: 0.7; }
    }

    @keyframes equalizerPulse {
      0% { transform: scaleY(0.3); opacity: 0.6; }
      50% { transform: scaleY(1); opacity: 1; }
      100% { transform: scaleY(0.3); opacity: 0.6; }
    }

    @keyframes gridMove {
      0% { background-position: 0px 0px; }
      100% { background-position: 0px 200px; }
    }
  `;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        color: "#e0e0ff",
        fontFamily: "Orbitron, Arial, sans-serif",
        textShadow: "0 0 6px #8a2be2",
        background: `
          linear-gradient(135deg,
            #12002b,
            #4a007a,
            #ff00ff,
            #4a00e0,
            #00e5ff,
            #12002b
          )
        `,
        backgroundSize: "400% 400%",
        animation: "synthwaveBG 12s ease infinite"
      }}
    >
      <style>{animationCSS}</style>

      <h2
        style={{
          fontSize: 40,
          marginBottom: 30,
          color: "#ff00ff",
          textShadow: "0 0 12px #ff00ff, 0 0 24px #8a2be2",
          animation: "neonFlicker 2.5s infinite"
        }}
      >
        AudioBit Studio — Synthwave Mode
      </h2>

      <div
        style={{
          background: "rgba(20, 0, 40, 0.7)",
          padding: 25,
          borderRadius: 14,
          maxWidth: 650,
          border: "2px solid #ff00ff",
          boxShadow: "0 0 20px #8a2be2, inset 0 0 20px #4a00e0"
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: 8,
            color: "#ff66ff",
            animation: "neonFlicker 3s infinite"
          }}
        >
          Video Prompt
        </label>
        <input
          value={videoPrompt}
          onChange={(e) => setVideoPrompt(e.target.value)}
          placeholder="Describe the neon cyberpunk video..."
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "2px solid #4a00e0",
            background: "#0d0020",
            color: "#e0e0ff",
            marginBottom: 20,
            boxShadow: "0 0 10px #4a00e0"
          }}
        />

        <label
          style={{
            display: "block",
            marginBottom: 8,
            color: "#ff66ff",
            animation: "neonFlicker 3s infinite"
          }}
        >
          Audio Prompt
        </label>
        <input
          value={audioPrompt}
          onChange={(e) => setAudioPrompt(e.target.value)}
          placeholder="Describe the synthwave track..."
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "2px solid #ff00ff",
            background: "#0d0020",
            color: "#e0e0ff",
            marginBottom: 20,
            boxShadow: "0 0 10px #ff00ff"
          }}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            width: "100%",
            padding: 16,
            background: loading
              ? "rgba(120, 0, 180, 0.4)"
              : "linear-gradient(135deg, #ff00ff, #4a00e0, #00e5ff)",
            border: "none",
            borderRadius: 12,
            color: "white",
            fontSize: 20,
            cursor: "pointer",
            textShadow: "0 0 8px #000",
            boxShadow: `
              0 0 20px #ff00ff,
              0 0 30px #4a00e0,
              0 0 40px #00e5ff,
              inset 0 0 20px rgba(255, 0, 255, 0.4)
            `,
            transition: "all 0.25s ease",
            transform: loading ? "scale(0.98)" : "scale(1)",
            letterSpacing: "1px"
          }}
        >
          {loading ? "Synthesizing Hologram..." : "Generate Neon AV"}
        </button>

        {error && (
          <p style={{ color: "#ff4444", marginTop: 10 }}>{error}</p>
        )}
      </div>

      {result?.final && (
        <div style={{ marginTop: 40 }}>
          <h3
            style={{
              color: "#ff00ff",
              textShadow: "0 0 10px #ff00ff",
              animation: "neonFlicker 2.8s infinite"
            }}
          >
            Final Neon Video
          </h3>

          <NeonWaveform />
          <NeonEqualizer />

          <div
            style={{
              border: "3px solid #4a00e0",
              borderRadius: 14,
              padding: 10,
              boxShadow: "0 0 25px #4a00e0, 0 0 40px #ff00ff",
              background: "rgba(10, 0, 30, 0.8)"
            }}
          >
            <video
              controls
              src={`data:video/mp4;base64,${result.final}`}
              style={{
                width: "100%",
                maxWidth: 650,
                borderRadius: 12,
                boxShadow: "0 0 20px #ff00ff"
              }}
            />
          </div>
        </div>
      )}

      <TronGrid />
    </div>
  );
}
