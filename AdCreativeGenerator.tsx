"use client";
import { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";

type TemplateKey = "hero" | "square" | "wide";

const TEMPLATES: Record<TemplateKey, { w: number; h: number; label: string }> = {
  hero: { w: 1200, h: 630, label: "LPヒーロー (1200×630)" },
  square: { w: 1080, h: 1080, label: "SNS正方形 (1080×1080)" },
  wide: { w: 1920, h: 600, label: "ワイドバナー (1920×600)" },
};

const PREVIEW_MAX_W = 680;

export default function AdCreativeGenerator() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [tpl, setTpl] = useState<TemplateKey>("hero");
  const [headline, setHeadline] = useState("月額¥9,900〜");
  const [subtext, setSubtext] = useState("頭金0円・全コミコミのカーリース");
  const [cta, setCta] = useState("今すぐ無料診断");
  const [badge, setBadge] = useState("期間限定キャンペーン中");
  const [isDragging, setIsDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => setPhoto(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setBusy(true);
    try {
      const t = TEMPLATES[tpl];
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true,
        allowTaint: true,
        scale: t.w / previewRef.current.offsetWidth,
        logging: false,
      });
      const a = document.createElement("a");
      a.download = `car-lease-ad-${tpl}.png`;
      a.href = canvas.toDataURL("image/png");
      a.click();
    } finally {
      setBusy(false);
    }
  };

  const t = TEMPLATES[tpl];
  const scale = PREVIEW_MAX_W / t.w;
  const previewH = t.h * scale;

  return (
    <section id="ad-creative" style={{ background: "#0a1628", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)",
            borderRadius: 99, padding: "6px 16px", marginBottom: 16,
          }}>
            <span style={{ fontSize: 12 }}>🎨</span>
            <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: 13 }}>
              広告クリエイティブ生成ツール
            </span>
          </div>
          <h2 style={{ color: "white", fontWeight: 900, fontSize: "clamp(24px,4vw,40px)", margin: "0 0 12px" }}>
            写真から<span style={{ color: "#f59e0b" }}>LP広告</span>を即作成
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: 0 }}>
            車の写真をアップロードするだけ。プロ品質の広告クリエイティブをワンクリックでダウンロード。
          </p>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Left: controls */}
          <div style={{ flex: "0 0 300px", minWidth: 260 }}>

            {/* Photo upload */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 8 }}>
                写真をアップロード
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                style={{
                  border: `2px dashed ${isDragging ? "#f59e0b" : "rgba(255,255,255,0.2)"}`,
                  borderRadius: 12, padding: "28px 20px", textAlign: "center",
                  cursor: "pointer", transition: "border-color 0.2s",
                  background: isDragging ? "rgba(245,158,11,0.05)" : "rgba(255,255,255,0.03)",
                }}
              >
                {photo ? (
                  <img src={photo} alt="preview" style={{
                    maxWidth: "100%", maxHeight: 120, borderRadius: 8,
                    objectFit: "cover", display: "block", margin: "0 auto 8px",
                  }} />
                ) : (
                  <div style={{ fontSize: 36, marginBottom: 8 }}>📸</div>
                )}
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                  {photo ? "クリックして変更" : "ドラッグ＆ドロップ\nまたはクリック"}
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
              />
            </div>

            {/* Template */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 8 }}>
                サイズ・テンプレート
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {(Object.keys(TEMPLATES) as TemplateKey[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => setTpl(k)}
                    style={{
                      background: tpl === k ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${tpl === k ? "#f59e0b" : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 8, padding: "10px 14px", color: tpl === k ? "#f59e0b" : "rgba(255,255,255,0.7)",
                      fontSize: 13, fontWeight: tpl === k ? 700 : 400, cursor: "pointer", textAlign: "left",
                    }}
                  >
                    {TEMPLATES[k].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Text fields */}
            {[
              { label: "バッジテキスト", val: badge, set: setBadge },
              { label: "メインコピー", val: headline, set: setHeadline },
              { label: "サブコピー", val: subtext, set: setSubtext },
              { label: "CTAボタン", val: cta, set: setCta },
            ].map(({ label, val, set }) => (
              <div key={label} style={{ marginBottom: 16 }}>
                <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>
                  {label}
                </label>
                <input
                  value={val}
                  onChange={(e) => set(e.target.value)}
                  style={{
                    width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8, padding: "10px 12px", color: "white", fontSize: 14,
                    outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
            ))}

            {/* Download button */}
            <button
              onClick={handleDownload}
              disabled={busy || !photo}
              style={{
                width: "100%", background: photo ? "#f59e0b" : "rgba(255,255,255,0.1)",
                color: photo ? "#0a1628" : "rgba(255,255,255,0.3)",
                fontWeight: 800, fontSize: 15, padding: "14px", borderRadius: 99,
                border: "none", cursor: photo ? "pointer" : "not-allowed",
                marginTop: 8, transition: "opacity 0.2s",
                opacity: busy ? 0.6 : 1,
              }}
            >
              {busy ? "生成中..." : "⬇️ PNGでダウンロード"}
            </button>
            {!photo && (
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, textAlign: "center", marginTop: 8 }}>
                写真をアップロードするとダウンロード可能になります
              </p>
            )}
          </div>

          {/* Right: preview */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 8 }}>
              プレビュー
            </label>

            <div style={{ position: "relative", width: PREVIEW_MAX_W, height: previewH, overflow: "hidden", borderRadius: 12 }}>
              {/* Actual creative div captured by html2canvas */}
              <div
                ref={previewRef}
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: PREVIEW_MAX_W,
                  height: previewH,
                  overflow: "hidden",
                  borderRadius: 12,
                  background: photo ? "transparent" : "#1e2d48",
                  fontFamily: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif",
                }}
              >
                {/* Background photo */}
                {photo && (
                  <img
                    src={photo}
                    crossOrigin="anonymous"
                    alt=""
                    style={{
                      position: "absolute", inset: 0, width: "100%", height: "100%",
                      objectFit: "cover", display: "block",
                    }}
                  />
                )}

                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(100deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 50%, rgba(10,22,40,0.3) 100%)",
                }} />

                {/* Placeholder if no photo */}
                {!photo && (
                  <div style={{
                    position: "absolute", inset: 0, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.15)", fontSize: 16,
                  }}>
                    写真をアップロードするとここに表示されます
                  </div>
                )}

                {/* Content */}
                <div style={{
                  position: "absolute", inset: 0,
                  padding: tpl === "square" ? "8% 10%" : "7% 7%",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                }}>
                  {/* Badge */}
                  {badge && (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      background: "rgba(245,158,11,0.25)", border: "1px solid rgba(245,158,11,0.6)",
                      borderRadius: 99, padding: "4px 14px", marginBottom: 16,
                      width: "fit-content",
                    }}>
                      <span style={{ fontSize: 10, lineHeight: 1 }}>✨</span>
                      <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: Math.round(11 * scale) + "px" }}>
                        {badge}
                      </span>
                    </div>
                  )}

                  {/* Headline */}
                  <div style={{
                    color: "#f59e0b", fontWeight: 900,
                    fontSize: Math.round(52 * scale) + "px",
                    lineHeight: 1.1, marginBottom: 12,
                    textShadow: "0 2px 16px rgba(0,0,0,0.5)",
                  }}>
                    {headline}
                  </div>

                  {/* Subtext */}
                  <div style={{
                    color: "rgba(255,255,255,0.9)", fontWeight: 600,
                    fontSize: Math.round(18 * scale) + "px",
                    lineHeight: 1.6, marginBottom: 24,
                    textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                  }}>
                    {subtext}
                  </div>

                  {/* CTA */}
                  {cta && (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      background: "#f59e0b", color: "#0a1628",
                      fontWeight: 800, fontSize: Math.round(15 * scale) + "px",
                      padding: `${Math.round(12 * scale)}px ${Math.round(28 * scale)}px`,
                      borderRadius: 99, width: "fit-content",
                      boxShadow: "0 4px 20px rgba(245,158,11,0.45)",
                    }}>
                      {cta} →
                    </div>
                  )}
                </div>

                {/* Bottom right branding */}
                <div style={{
                  position: "absolute", bottom: Math.round(16 * scale), right: Math.round(20 * scale),
                  color: "rgba(255,255,255,0.4)", fontSize: Math.round(10 * scale) + "px", fontWeight: 600,
                }}>
                  カーリース比較ナビ
                </div>
              </div>
            </div>

            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
              プレビューは縮小表示です。ダウンロードすると {t.w}×{t.h}px のフル解像度で出力されます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
