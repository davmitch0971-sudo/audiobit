import { useState } from "react";
import axios from "axios";

export default function useFullAV() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function createFullAV({
    videoPrompt,
    audioPrompt,
    duration = 10,
    resolution = "1080p",
    style = "cyberpunk-neon"
  }) {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.post("http://localhost:3000/ai/av/full", {
        videoPrompt,
        audioPrompt,
        duration,
        resolution,
        style
      });

      setResult(res.data);
      return res.data;
    } catch (err) {
      console.error("Full AV error:", err);
      setError("Failed to generate full AV");
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    result,
    error,
    createFullAV
  };
}
