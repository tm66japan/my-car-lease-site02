"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "var(--blue-900)", boxShadow: "0 2px 16px rgba(10,31,68,0.3)"
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>🚗</span>
          <span style={{
            fontFamily: "var(--font-en)", fontWeight: 900, fontSize: 20,
            color: "var(--white)", letterSpacing: 1
          }}>CarLease<span style={{ color: "var(--accent)" }}>比較</span></span>
        </div>

        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {["診断する","プラン比較","特徴","よくある質問"].map((item, i) => (
            <a key={i} href={["#simulator","#comparison","#features","#faq"][i]}
              style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: 500,
                transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >{item}</a>
          ))}
          <a href="#simulator" style={{
            background: "var(--accent)", color: "var(--blue-900)", fontWeight: 700,
            padding: "8px 20px", borderRadius: 99, fontSize: 14, transition: "opacity 0.2s"
          }}>無料診断</a>
        </nav>

        <button onClick={() => setOpen(!open)} style={{
          background: "none", border: "none", color: "white", fontSize: 28,
          display: "none"
        }} className="hamburger" aria-label="メニュー">☰</button>
      </div>

      {open && (
        <div style={{
          background: "var(--blue-800)", padding: "16px 20px",
          display: "flex", flexDirection: "column", gap: 16
        }}>
          {["診断する","プラン比較","特徴","よくある質問"].map((item, i) => (
            <a key={i} href={["#simulator","#comparison","#features","#faq"][i]}
              onClick={() => setOpen(false)}
              style={{ color: "white", fontWeight: 500 }}>{item}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
