"use client";
export default function Footer() {
  return (
    <footer style={{
      background: "var(--blue-900)", color: "rgba(255,255,255,0.75)",
      padding: "56px 20px 32px"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40, marginBottom: 48
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 28 }}>🚗</span>
              <span style={{
                fontFamily: "var(--font-en)", fontWeight: 900, fontSize: 20,
                color: "white"
              }}>CarLease<span style={{ color: "var(--accent)" }}>比較</span></span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>
              あなたに最適なカーリースを見つけるための、信頼できる比較情報を提供しています。
            </p>
          </div>

          <div>
            <h4 style={{ color: "white", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>コンテンツ</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["30秒診断","プラン比較","カーリースの特徴","よくある質問"].map(item => (
                <a key={item} href="#" style={{ fontSize: 14, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "white")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >{item}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "white", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>提携サービス</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["定額カルモくん","SOMPOで乗ーる","KINTO","おトクにマイカー","ニコノリ"].map(item => (
                <a key={item} href="#" style={{ fontSize: 14, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "white")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >{item}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "white", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>無料診断を試す</h4>
            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
              4つの質問に答えるだけで最適なカーリースが見つかります。
            </p>
            <a href="#simulator" style={{
              display: "inline-block", background: "var(--accent)",
              color: "var(--blue-900)", fontWeight: 800, fontSize: 14,
              padding: "12px 24px", borderRadius: 99
            }}>🎯 今すぐ診断する</a>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 24, textAlign: "center", fontSize: 13
        }}>
          <p>© 2024 CarLease比較 | 本サイトの情報は参考目的であり、最新の情報は各公式サイトをご確認ください。</p>
        </div>
      </div>
    </footer>
  );
}
