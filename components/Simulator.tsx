"use client";
import { useState } from "react";

const STEPS = [
  {
    id: "budget",
    question: "月々の予算はどのくらいですか？",
    icon: "💰",
    options: [
      { label: "〜1万円", value: "10000" },
      { label: "1〜2万円", value: "20000" },
      { label: "2〜3万円", value: "30000" },
      { label: "3万円以上", value: "40000" },
    ],
  },
  {
    id: "carType",
    question: "どんな車に乗りたいですか？",
    icon: "🚗",
    options: [
      { label: "軽自動車", value: "kei" },
      { label: "コンパクトカー", value: "compact" },
      { label: "SUV", value: "suv" },
      { label: "ミニバン", value: "minivan" },
    ],
  },
  {
    id: "usage",
    question: "主な用途は何ですか？",
    icon: "🗺️",
    options: [
      { label: "通勤・通学", value: "commute" },
      { label: "ファミリー送迎", value: "family" },
      { label: "週末ドライブ", value: "leisure" },
      { label: "仕事・商用", value: "business" },
    ],
  },
  {
    id: "period",
    question: "利用期間の希望は？",
    icon: "📅",
    options: [
      { label: "1〜2年", value: "short" },
      { label: "3〜4年", value: "medium" },
      { label: "5年以上", value: "long" },
      { label: "こだわらない", value: "any" },
    ],
  },
];

const PLANS = [
  {
    name: "定額カルモくん",
    logo: "🟦",
    price: { kei: 9900, compact: 14900, suv: 24900, minivan: 22900 },
    period: "7年",
    highlight: "業界最安水準",
    features: ["頭金0円", "税金コミコミ", "メンテプランあり"],
    tag: "コスパ最強",
    tagColor: "#16a34a",
    url: "#",
  },
  {
    name: "SOMPOで乗ーる",
    logo: "🟧",
    price: { kei: 12900, compact: 16900, suv: 27900, minivan: 25900 },
    period: "3〜9年",
    highlight: "保険会社の安心感",
    features: ["メンテ充実", "残価設定型", "乗換え自由"],
    tag: "安心・サポート充実",
    tagColor: "#ea580c",
    url: "#",
  },
  {
    name: "KINTO",
    logo: "🟥",
    price: { kei: 16500, compact: 19800, suv: 32000, minivan: 29800 },
    period: "3〜5年",
    highlight: "トヨタ車専門",
    features: ["保険込み", "メンテ込み", "乗換えあり"],
    tag: "トヨタ車に乗りたい",
    tagColor: "#dc2626",
    url: "#",
  },
  {
    name: "おトクにマイカー",
    logo: "🟩",
    price: { kei: 11200, compact: 15800, suv: 26500, minivan: 24000 },
    period: "5〜11年",
    highlight: "最長11年契約で激安",
    features: ["走行制限なし", "月払い均一", "長期安定"],
    tag: "長期利用向け",
    tagColor: "#0891b2",
    url: "#",
  },
];

function getRecommendations(answers: Record<string, string>) {
  const ct = answers.carType as "kei" | "compact" | "suv" | "minivan" || "compact";
  const budget = parseInt(answers.budget || "20000");
  return PLANS
    .map(p => ({ ...p, monthlyPrice: p.price[ct] }))
    .filter(p => p.monthlyPrice <= budget + 5000)
    .sort((a, b) => a.monthlyPrice - b.monthlyPrice)
    .slice(0, 3);
}

export default function Simulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [STEPS[step].id]: value };
    setAnswers(newAnswers);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => { setStep(0); setAnswers({}); setDone(false); };
  const recommendations = done ? getRecommendations(answers) : [];
  const progress = ((step) / STEPS.length) * 100;

  return (
    <section id="simulator" style={{
      background: "var(--gray-50)", padding: "80px 20px"
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            background: "var(--blue-100)", color: "var(--blue-600)",
            fontWeight: 700, fontSize: 13, padding: "4px 14px", borderRadius: 99
          }}>30秒診断シミュレーター</span>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900,
            color: "var(--blue-900)", marginTop: 16
          }}>あなたに最適なプランを見つける</h2>
          <p style={{ color: "var(--gray-600)", marginTop: 8 }}>
            4つの質問に答えるだけで、ぴったりのカーリースをご提案します
          </p>
        </div>

        <div style={{
          background: "white", borderRadius: 20, boxShadow: "var(--shadow-lg)",
          overflow: "hidden"
        }}>
          {/* Progress bar */}
          {!done && (
            <div style={{ background: "var(--gray-100)", height: 6 }}>
              <div style={{
                height: "100%", background: "var(--blue-500)",
                width: `${progress}%`, transition: "width 0.4s ease",
                borderRadius: 99
              }} />
            </div>
          )}

          <div style={{ padding: "40px 32px" }}>
            {!done ? (
              <>
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>{STEPS[step].icon}</div>
                  <div style={{ color: "var(--gray-400)", fontSize: 13, marginBottom: 8 }}>
                    質問 {step + 1} / {STEPS.length}
                  </div>
                  <h3 style={{
                    fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 900,
                    color: "var(--blue-900)"
                  }}>{STEPS[step].question}</h3>
                </div>

                <div style={{
                  display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14
                }}>
                  {STEPS[step].options.map((opt) => (
                    <button key={opt.value} onClick={() => handleSelect(opt.value)}
                      style={{
                        background: "white", border: "2px solid var(--gray-200)",
                        borderRadius: 12, padding: "18px 16px", fontWeight: 700,
                        fontSize: 15, color: "var(--gray-800)",
                        transition: "all 0.2s", cursor: "pointer"
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--blue-500)";
                        (e.currentTarget as HTMLElement).style.background = "var(--blue-50)";
                        (e.currentTarget as HTMLElement).style.color = "var(--blue-700)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--gray-200)";
                        (e.currentTarget as HTMLElement).style.background = "white";
                        (e.currentTarget as HTMLElement).style.color = "var(--gray-800)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >{opt.label}</button>
                  ))}
                </div>

                {step > 0 && (
                  <button onClick={() => setStep(step - 1)}
                    style={{
                      marginTop: 24, background: "none", border: "none",
                      color: "var(--gray-400)", fontSize: 14, fontWeight: 500
                    }}>← 前の質問に戻る</button>
                )}
              </>
            ) : (
              <>
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
                  <h3 style={{
                    fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 900,
                    color: "var(--blue-900)"
                  }}>あなたにおすすめのプラン</h3>
                  <p style={{ color: "var(--gray-600)", marginTop: 8 }}>
                    診断結果に基づき、{recommendations.length}つのプランをご提案します
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {recommendations.length > 0 ? recommendations.map((plan, i) => (
                    <div key={plan.name} style={{
                      border: i === 0 ? "2px solid var(--blue-500)" : "2px solid var(--gray-200)",
                      borderRadius: 16, padding: 24, position: "relative",
                      background: i === 0 ? "var(--blue-50)" : "white"
                    }}>
                      {i === 0 && (
                        <div style={{
                          position: "absolute", top: -12, left: 20,
                          background: "var(--blue-500)", color: "white",
                          fontWeight: 800, fontSize: 12, padding: "4px 14px",
                          borderRadius: 99
                        }}>🏆 最もおすすめ</div>
                      )}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                            <span style={{ fontSize: 24 }}>{plan.logo}</span>
                            <span style={{ fontWeight: 900, fontSize: 18, color: "var(--blue-900)" }}>{plan.name}</span>
                          </div>
                          <span style={{
                            background: plan.tagColor + "22", color: plan.tagColor,
                            fontWeight: 700, fontSize: 12, padding: "3px 10px", borderRadius: 99
                          }}>{plan.tag}</span>
                          <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {plan.features.map(f => (
                              <span key={f} style={{
                                background: "var(--gray-100)", color: "var(--gray-600)",
                                fontSize: 12, padding: "3px 8px", borderRadius: 6
                              }}>✓ {f}</span>
                            ))}
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{
                            fontFamily: "var(--font-en)", fontWeight: 900,
                            fontSize: 28, color: "var(--blue-600)"
                          }}>¥{plan.monthlyPrice.toLocaleString()}<span style={{ fontSize: 14, fontWeight: 500, color: "var(--gray-400)" }}>/月</span></div>
                          <div style={{ color: "var(--gray-400)", fontSize: 12 }}>契約期間: {plan.period}</div>
                          <a href={plan.url} style={{
                            display: "inline-block", marginTop: 10,
                            background: i === 0 ? "var(--blue-500)" : "var(--gray-800)",
                            color: "white", fontWeight: 700, fontSize: 14,
                            padding: "10px 20px", borderRadius: 99
                          }}>詳細を見る →</a>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div style={{ textAlign: "center", padding: 40, color: "var(--gray-400)" }}>
                      <div style={{ fontSize: 48 }}>😢</div>
                      <p style={{ marginTop: 12 }}>ご予算に合うプランが見つかりませんでした。<br />予算を少し上げると選択肢が広がります。</p>
                    </div>
                  )}
                </div>

                <div style={{ textAlign: "center", marginTop: 24 }}>
                  <button onClick={reset} style={{
                    background: "none", border: "2px solid var(--gray-200)",
                    borderRadius: 99, padding: "10px 24px", fontWeight: 700,
                    color: "var(--gray-600)", fontSize: 14
                  }}>🔄 もう一度診断する</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
