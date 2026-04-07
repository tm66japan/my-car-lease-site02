"use client";
export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 60%, var(--blue-500) 100%)",
      padding: "80px 20px 100px", position: "relative", overflow: "hidden"
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: -80, right: -80, width: 400, height: 400,
        borderRadius: "50%", background: "rgba(59,130,246,0.15)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -60, width: 300, height: 300,
        borderRadius: "50%", background: "rgba(245,158,11,0.10)", pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.5)",
          borderRadius: 99, padding: "6px 16px", marginBottom: 24
        }}>
          <span style={{ fontSize: 12 }}>✨</span>
          <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13 }}>
            月額定額・頭金0円・全部コミコミ
          </span>
        </div>

        <h1 style={{
          color: "white", fontWeight: 900, fontSize: "clamp(28px, 5vw, 56px)",
          marginBottom: 20, lineHeight: 1.2
        }}>
          あなたにぴったりの<br />
          <span style={{ color: "var(--accent)" }}>カーリース</span>を<br />
          30秒で見つけよう
        </h1>

        <p style={{
          color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)",
          maxWidth: 520, marginBottom: 40, lineHeight: 1.8
        }}>
          予算・車種・使い方から最適なプランを自動診断。<br />
          主要カーリース10社以上を徹底比較して、<br />
          賢い選択をサポートします。
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#simulator" style={{
            background: "var(--accent)", color: "var(--blue-900)", fontWeight: 800,
            fontSize: 17, padding: "16px 36px", borderRadius: 99,
            boxShadow: "0 4px 24px rgba(245,158,11,0.4)",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(245,158,11,0.5)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(245,158,11,0.4)";
            }}
          >
            🎯 無料で30秒診断する
          </a>
          <a href="#comparison" style={{
            background: "rgba(255,255,255,0.15)", color: "white", fontWeight: 700,
            fontSize: 16, padding: "16px 32px", borderRadius: 99,
            border: "1px solid rgba(255,255,255,0.3)",
            display: "inline-flex", alignItems: "center", gap: 8
          }}>
            📊 プランを比較する
          </a>
        </div>

        <div style={{ display: "flex", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
          {[
            { num: "10社以上", label: "提携カーリース" },
            { num: "月額¥9,900〜", label: "最安値プラン" },
            { num: "300車種+", label: "選べる車種数" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "var(--font-en)", fontWeight: 900,
                fontSize: "clamp(22px, 3vw, 32px)", color: "var(--accent)"
              }}>{s.num}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
