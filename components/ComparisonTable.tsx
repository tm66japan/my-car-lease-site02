"use client";
export default function ComparisonTable() {
  const plans = [
    {
      name: "定額カルモくん", logo: "🟦", price: "¥9,900〜",
      deposit: "不要", maintenance: "◎", insurance: "別途", period: "1〜11年",
      km: "無制限", recommend: "コスパ重視派",
      best: true,
    },
    {
      name: "SOMPOで乗ーる", logo: "🟧", price: "¥12,900〜",
      deposit: "不要", maintenance: "◎", insurance: "込み可", period: "3〜9年",
      km: "無制限", recommend: "保険もまとめたい方",
      best: false,
    },
    {
      name: "KINTO", logo: "🟥", price: "¥16,500〜",
      deposit: "不要", maintenance: "◎", insurance: "込み", period: "3〜5年",
      km: "1,500km/月", recommend: "トヨタ車が欲しい方",
      best: false,
    },
    {
      name: "おトクにマイカー", logo: "🟩", price: "¥11,200〜",
      deposit: "不要", maintenance: "△", insurance: "別途", period: "5〜11年",
      km: "無制限", recommend: "長期利用予定の方",
      best: false,
    },
    {
      name: "ニコノリ", logo: "🟪", price: "¥13,200〜",
      deposit: "不要", maintenance: "○", insurance: "別途", period: "3〜9年",
      km: "無制限", recommend: "幅広い選択肢を求める方",
      best: false,
    },
  ];

  const headers = ["サービス","月額","頭金","メンテ","保険","契約期間","走行制限","おすすめ"];

  return (
    <section id="comparison" style={{ padding: "80px 20px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            background: "var(--blue-100)", color: "var(--blue-600)",
            fontWeight: 700, fontSize: 13, padding: "4px 14px", borderRadius: 99
          }}>プラン比較</span>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900,
            color: "var(--blue-900)", marginTop: 16
          }}>主要カーリースを徹底比較</h2>
          <p style={{ color: "var(--gray-600)", marginTop: 8 }}>
            独自調査をもとに主要5サービスを比較しました（2024年時点）
          </p>
        </div>

        <div style={{ overflowX: "auto", borderRadius: 16, boxShadow: "var(--shadow)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
            <thead>
              <tr style={{ background: "var(--blue-900)" }}>
                {headers.map(h => (
                  <th key={h} style={{
                    color: "white", fontWeight: 700, fontSize: 13,
                    padding: "16px 12px", textAlign: "left", whiteSpace: "nowrap"
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans.map((p, i) => (
                <tr key={p.name} style={{
                  background: p.best ? "var(--blue-50)" : (i % 2 === 0 ? "white" : "var(--gray-50)"),
                  borderLeft: p.best ? "4px solid var(--blue-500)" : "4px solid transparent"
                }}>
                  <td style={{ padding: "16px 12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 20 }}>{p.logo}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "var(--blue-900)" }}>{p.name}</div>
                        {p.best && <span style={{
                          background: "var(--blue-500)", color: "white",
                          fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4
                        }}>人気No.1</span>}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "16px 12px", fontWeight: 800, color: "var(--blue-600)", fontFamily: "var(--font-en)", fontSize: 15 }}>{p.price}</td>
                  <td style={{ padding: "16px 12px", color: "var(--gray-600)", fontSize: 14 }}>{p.deposit}</td>
                  <td style={{ padding: "16px 12px", fontSize: 16 }}>{p.maintenance}</td>
                  <td style={{ padding: "16px 12px", color: "var(--gray-600)", fontSize: 14 }}>{p.insurance}</td>
                  <td style={{ padding: "16px 12px", color: "var(--gray-600)", fontSize: 14 }}>{p.period}</td>
                  <td style={{ padding: "16px 12px", color: "var(--gray-600)", fontSize: 14 }}>{p.km}</td>
                  <td style={{ padding: "16px 12px" }}>
                    <span style={{
                      background: "var(--blue-100)", color: "var(--blue-700)",
                      fontWeight: 700, fontSize: 12, padding: "4px 10px",
                      borderRadius: 99, whiteSpace: "nowrap"
                    }}>{p.recommend}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ color: "var(--gray-400)", fontSize: 12, marginTop: 16, textAlign: "center" }}>
          ※価格・条件は変更される場合があります。各社公式サイトでご確認ください。
        </p>
      </div>
    </section>
  );
}
