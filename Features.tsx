"use client";
export default function Features() {
  const features = [
    { icon: "💸", title: "頭金0円・初期費用なし", desc: "まとまった資金がなくても大丈夫。月々定額のみでマイカーに乗れます。" },
    { icon: "🧾", title: "税金・諸費用コミコミ", desc: "自動車税・重量税・自賠責保険など面倒な費用もすべて月額に含まれます。" },
    { icon: "🔧", title: "メンテナンスも任せられる", desc: "プランによっては車検・オイル交換・タイヤ交換まで月額内でOK。" },
    { icon: "🔄", title: "新車に乗り換え自由", desc: "契約期間が終わったら最新モデルへ乗り換え。常に新しい車に乗れます。" },
    { icon: "📱", title: "すべてオンラインで完結", desc: "申し込みから契約まで自宅で完結。ディーラーへ行く必要がありません。" },
    { icon: "🛡️", title: "残価リスクなし", desc: "将来の車の価値を気にしなくてOK。リスクは貸し手側が負担します。" },
  ];

  return (
    <section id="features" style={{
      padding: "80px 20px",
      background: "linear-gradient(180deg, var(--gray-50) 0%, white 100%)"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            background: "var(--blue-100)", color: "var(--blue-600)",
            fontWeight: 700, fontSize: 13, padding: "4px 14px", borderRadius: 99
          }}>カーリースのメリット</span>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900,
            color: "var(--blue-900)", marginTop: 16
          }}>カーリースが選ばれる6つの理由</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: "white", borderRadius: 16, padding: 28,
              boxShadow: "var(--shadow)", border: "1px solid var(--gray-100)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{
                fontWeight: 800, fontSize: 17, color: "var(--blue-900)",
                marginBottom: 10
              }}>{f.title}</h3>
              <p style={{ color: "var(--gray-600)", fontSize: 14, lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
