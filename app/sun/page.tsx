"use client";
import { useEffect, useRef } from "react";

// Gezegen verileri (yarıçaplar, renkler, yörünge uzaklıkları, hızlar yaklaşık)
const PLANETS = [
  { name: "Mercury", color: "#b1b1b1", orbit: 80, size: 4, speed: 4.8 },
  { name: "Venus", color: "#e6c97b", orbit: 120, size: 7, speed: 3.5 },
  { name: "Earth", color: "#4e9cff", orbit: 170, size: 8, speed: 2.98 },
  { name: "Mars", color: "#e07b4e", orbit: 220, size: 6, speed: 2.4 },
  { name: "Jupiter", color: "#e0d1a4", orbit: 300, size: 16, speed: 1.3 },
  { name: "Saturn", color: "#e6e1b1", orbit: 380, size: 14, speed: 0.96 },
  { name: "Uranus", color: "#b1e6e6", orbit: 460, size: 11, speed: 0.68 },
  { name: "Neptune", color: "#4e6ee6", orbit: 540, size: 11, speed: 0.54 },
];

// Ring parameters for planets with rings
const RING_PARAMS: Record<string, { inner: number; outer: number; color: string }> = {
  Saturn: { inner: PLANETS[5].size + 3, outer: PLANETS[5].size + 13, color: "rgba(230,225,177,0.35)" },
  Jupiter: { inner: PLANETS[4].size + 3, outer: PLANETS[4].size + 7, color: "rgba(224,209,164,0.18)" },
  Neptune: { inner: PLANETS[7].size + 3, outer: PLANETS[7].size + 6, color: "rgba(78,110,230,0.18)" },
};

function drawRing(ctx: CanvasRenderingContext2D, px: number, py: number, params: { inner: number; outer: number; color: string }) {
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(px, py, params.outer, params.outer * 0.45, 0, 0, 2 * Math.PI);
  ctx.ellipse(px, py, params.inner, params.inner * 0.45, 0, 0, 2 * Math.PI);
  ctx.clip('evenodd');
  ctx.beginPath();
  ctx.ellipse(px, py, params.outer, params.outer * 0.45, 0, 0, 2 * Math.PI);
  ctx.fillStyle = params.color;
  ctx.globalAlpha = 0.8;
  ctx.fill();
  ctx.globalAlpha = 1.0;
  ctx.restore();
}

export default function SunSystem() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resizeCanvas() {
      const c = canvasRef.current;
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function drawSystem(time: number) {
      const c = canvasRef.current;
      if (!ctx || !c) return;
      ctx.clearRect(0, 0, c.width, c.height);
      const cx = c.width / 2;
      const cy = c.height / 2;

      // Güneş
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, 32, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffe066";
      ctx.shadowColor = "#ffe066";
      ctx.shadowBlur = 60;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // Gezegenler
      for (let i = 0; i < PLANETS.length; i++) {
        const planet = PLANETS[i];
        // Eliptik yörüngede konum: a = planet.orbit, b = planet.orbit * 0.7
        const angle = (time * 0.00008 * planet.speed + i * 0.7) % (2 * Math.PI);
        const a = planet.orbit;
        const b = planet.orbit * 0.7;
        const px = cx + a * Math.cos(angle);
        const py = cy + b * Math.sin(angle);
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, planet.size, 0, 2 * Math.PI);
        ctx.fillStyle = planet.color;
        ctx.shadowColor = planet.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.restore();
        // Draw rings for Saturn, Jupiter, Neptune
        if (RING_PARAMS[planet.name]) {
          drawRing(ctx, px, py, RING_PARAMS[planet.name]);
        }
        // Dünya için minik ay
        if (planet.name === "Earth") {
          const moonAngle = angle * 12 + time * 0.0005;
          const mx = px + 16 * Math.cos(moonAngle);
          const my = py + 11.2 * Math.sin(moonAngle); // b = 0.7 * 16
          ctx.save();
          ctx.beginPath();
          ctx.arc(mx, my, 2.5, 0, 2 * Math.PI);
          ctx.fillStyle = "#ddd";
          ctx.shadowColor = "#fff";
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.restore();
        }
      }

      // --- Uzay gemisi ---
      // (Uzay gemisi kaldırıldı)
    }

    let running = true;
    function animate(time: number) {
      if (!running) return;
      drawSystem(time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    return () => {
      running = false;
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", zIndex: 1, display: 'block' }} />
    </div>
  );
}
