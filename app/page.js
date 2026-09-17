"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#111827",
      color: "white",
      padding: "30px 20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        maxWidth: "700px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "32px",
          textAlign: "center",
          marginBottom: "10px"
        }}>
          🎬 AI Video Maker
        </h1>

        <p style={{
          textAlign: "center",
          color: "#9ca3af",
          marginBottom: "30px"
        }}>
          Create amazing videos with AI
        </p>

        <div style={{
          background: "#1f2937",
          padding: "20px",
          borderRadius: "16px"
        }}>
          <label style={{
            display: "block",
            marginBottom: "10px",
            fontWeight: "bold"
          }}>
            Video Prompt
          </label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your video..."
            rows={6}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #374151",
              background: "#111827",
              color: "white",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          />

          <button
            onClick={() => alert(
              prompt
                ? "Your video prompt is ready!"
                : "Please enter a video prompt."
            )}
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#2563eb",
              color: "white",
              fontSize: "17px",
              fontWeight: "bold"
            }}
          >
            🚀 Generate Video
          </button>
        </div>
      </div>
    </main>
  );
}
