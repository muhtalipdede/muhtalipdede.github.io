"use client";
import { useEffect, useRef } from "react";

export default function NovaSimulation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fullscreen canvas setup
    function resizeCanvas() {
      const c = canvasRef.current;
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star system parameters
    const orbitRadius = () => Math.min(window.innerWidth, window.innerHeight) * 0.22;
    const centerX = () => window.innerWidth / 2;
    const centerY = () => window.innerHeight / 2;
    const redGiantR = () => Math.max(60, Math.min(window.innerWidth, window.innerHeight) * 0.09);
    const whiteDwarfR = () => Math.max(18, Math.min(window.innerWidth, window.innerHeight) * 0.027);
    let accretion = 0; // 0 to 1
    let exploding = false;
    let explosionFrame = 0;
    const maxAccretion = 1;
    const accretionSpeed = 0.003;
    const explosionDuration = 60;
    let angle = 0;
    const angularSpeed = 0.008; // radians per frame

    // Yıldız izleri için geçmiş pozisyonları tutan diziler (tür tanımı ile closure dışında tanımlanmalı)
    type TrailPoint = { x: number; y: number };
    const redGiantTrail: TrailPoint[] = [];
    const whiteDwarfTrail: TrailPoint[] = [];
    const maxTrailLength = 60; // iz uzunluğu (frame cinsinden)

    function drawSystem() {
      const c = canvasRef.current;
      if (!ctx || !c) return;
      ctx.clearRect(0, 0, c.width, c.height);
      // Calculate star positions
      const cx = centerX();
      const cy = centerY();
      // Yıldızlar arası boşluk artırıldı
      const orad = orbitRadius() * 1.25;
      const redGiant = {
        x: cx + orad * Math.cos(angle),
        y: cy + orad * Math.sin(angle),
        r: redGiantR(),
        color: "#ff3333"
      };
      const whiteDwarf = {
        x: cx - orad * Math.cos(angle),
        y: cy - orad * Math.sin(angle),
        r: whiteDwarfR(),
        color: "#b3e6ff" // açık buz mavisi
      };

      // --- Yıldız izlerini güncelle ve çiz ---
      redGiantTrail.push({ x: redGiant.x, y: redGiant.y });
      whiteDwarfTrail.push({ x: whiteDwarf.x, y: whiteDwarf.y });
      if (redGiantTrail.length > maxTrailLength) redGiantTrail.shift();
      if (whiteDwarfTrail.length > maxTrailLength) whiteDwarfTrail.shift();
      // Red giant trail
      for (let i = 0; i < redGiantTrail.length - 1; i++) {
        const t = i / (redGiantTrail.length - 1);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(redGiantTrail[i].x, redGiantTrail[i].y);
        ctx.lineTo(redGiantTrail[i + 1].x, redGiantTrail[i + 1].y);
        ctx.strokeStyle = `rgba(255,51,51,${0.18 * (1 - t)})`;
        ctx.lineWidth = 18 * (1 - t) + 2;
        ctx.shadowColor = '#ff3333';
        ctx.shadowBlur = 16 * (1 - t);
        ctx.stroke();
        ctx.restore();
      }
      // White dwarf trail
      for (let i = 0; i < whiteDwarfTrail.length - 1; i++) {
        const t = i / (whiteDwarfTrail.length - 1);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(whiteDwarfTrail[i].x, whiteDwarfTrail[i].y);
        ctx.lineTo(whiteDwarfTrail[i + 1].x, whiteDwarfTrail[i + 1].y);
        ctx.strokeStyle = `rgba(179,230,255,${0.13 * (1 - t)})`;
        ctx.lineWidth = 12 * (1 - t) + 2;
        ctx.shadowColor = '#b3e6ff';
        ctx.shadowBlur = 12 * (1 - t);
        ctx.stroke();
        ctx.restore();
      }

      // Draw red giant
      ctx.beginPath();
      ctx.arc(redGiant.x, redGiant.y, redGiant.r, 0, 2 * Math.PI);
      ctx.fillStyle = redGiant.color;
      ctx.shadowColor = redGiant.color;
      ctx.shadowBlur = 30;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw white dwarf
      ctx.beginPath();
      ctx.arc(whiteDwarf.x, whiteDwarf.y, whiteDwarf.r, 0, 2 * Math.PI);
      ctx.fillStyle = whiteDwarf.color;
      ctx.shadowColor = whiteDwarf.color;
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw accreted layer
      if (!exploding) {
        ctx.beginPath();
        ctx.arc(whiteDwarf.x, whiteDwarf.y, whiteDwarf.r + 6 * accretion, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(255, 200, 100, ${0.5 * accretion})`;
        ctx.lineWidth = 4;
        ctx.stroke();
      }

      // Draw explosion
      if (exploding) {
        const progress = explosionFrame / explosionDuration;
        const maxRadius = Math.max(80, whiteDwarf.r * 4.5);
        ctx.save();
        ctx.beginPath();
        ctx.arc(whiteDwarf.x, whiteDwarf.y, whiteDwarf.r + maxRadius * progress, 0, 2 * Math.PI);
        ctx.fillStyle = whiteDwarf.color; // Patlama rengi beyaz cüce ile aynı
        ctx.shadowColor = whiteDwarf.color;
        ctx.shadowBlur = 40 * (1 - progress);
        ctx.globalAlpha = 1 - progress;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      // Draw planets around white dwarf
      const planetCountWD = 2;
      const planetOrbitsWD = [whiteDwarf.r * 4.5, whiteDwarf.r * 7.2];
      const planetSpeedsWD = [1.7, 0.95];
      for (let i = 0; i < planetCountWD; i++) {
        const planetAngle = angle * planetSpeedsWD[i] + i * (2 * Math.PI / planetCountWD);
        const planetOrbit = planetOrbitsWD[i];
        const px = whiteDwarf.x + planetOrbit * Math.cos(planetAngle);
        const py = whiteDwarf.y + planetOrbit * Math.sin(planetAngle);
        // Yıldıza yakın küçük, uzak büyük gezegen
        const planetRadius = 8 + 7 * (i / (planetCountWD - 1 || 1));
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, planetRadius, 0, 2 * Math.PI);
        ctx.fillStyle = i === 0 ? '#b8b8b8' : '#ffe680';
        ctx.shadowColor = '#b3e6ff';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }
      // Draw planets around red giant
      const planetCountRG = 5;
      const planetOrbits = [redGiant.r * 1.7, redGiant.r * 2.3, redGiant.r * 3.1, redGiant.r * 4.2, redGiant.r * 5.1];
      const planetSpeeds = [0.5, 0.32, 0.18, 0.13, 0.08];
      for (let i = 0; i < planetCountRG; i++) {
        const planetAngle = angle * planetSpeeds[i] + i * (2 * Math.PI / planetCountRG);
        const planetOrbit = planetOrbits[i];
        const px = redGiant.x + planetOrbit * Math.cos(planetAngle);
        const py = redGiant.y + planetOrbit * Math.sin(planetAngle);
        // Yıldıza yakın küçük, uzak büyük gezegen
        const planetRadius = 9 + 8 * (i / (planetCountRG - 1));
        let planetColor = '#ffb347';
        if (i === 1) planetColor = '#6ec6ff';
        else if (i === 2) planetColor = '#baffc9';
        else if (i === 3) planetColor = '#e066ff';
        else if (i === 4) planetColor = '#ff6666';
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, planetRadius, 0, 2 * Math.PI);
        ctx.fillStyle = planetColor;
        ctx.shadowColor = '#ff3333';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      if (!ctx) return;
      angle += angularSpeed;
      if (!exploding) {
        accretion += accretionSpeed;
        if (accretion >= maxAccretion) {
          exploding = true;
          explosionFrame = 0;
        }
      } else {
        explosionFrame++;
        if (explosionFrame > explosionDuration) {
          exploding = false;
          accretion = 0;
        }
      }
      drawSystem();
      requestAnimationFrame(animate);
    }

    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ textAlign: "center", width: "100vw", height: "100vh", overflow: "hidden", background: "#111" }}>
      <h2 style={{ color: '#fff', position: 'absolute', left: 0, right: 0, top: 24, zIndex: 2 }}>Nova Patlaması Simülasyonu</h2>
      <canvas ref={canvasRef} style={{ position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", zIndex: 1, display: 'block' }} />
      <div style={{ color: '#fff', position: 'absolute', left: 0, right: 0, bottom: 24, zIndex: 2 }}>
        Kırmızı dev yıldızdan beyaz cüceye madde akışı ve periyodik nova patlaması.
      </div>
    </div>
  );
}
