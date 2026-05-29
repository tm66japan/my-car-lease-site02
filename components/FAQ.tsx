"use client";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "カーリースと購入・レンタカーの違いは？", a: "購入は高額な初期費用が必要ですが、カーリースは月額定額で乗れます。レンタカーは短期向けですが、カーリースは数年単位の長期利用向けで、自分の車のように自由に使えます。" },
    { q: "頭金は本当に不要ですか？", a: "多くのカーリースサービスでは頭金0円で契約できます。ただし、一部サービスや車種では初回に頭金が必要なケースもありますので、各サービスの詳細ページでご確認ください。" },
    { q: "契約期間中に解約できますか？", a: "基本的に中途解約は可能ですが、違約金が発生する場合があります。解約金の金額はサービスや残余期間によって異なりますので、契約前に確認することをおすすめします。" },
    { q: "走行距離に制限はありますか？", a: "サービスによって異なります。月1,500kmなど上限を設けているサービスもあれば、無制限のサービスもあります。長距離ドライブが多い方は走行距離無制限のサービスを選ぶと安心です。" },
    { q: "車検やメンテナンスはどうなりますか？", a: "基本プランでは車検・自動車税・自賠責保険がコミコミ。オプションのメンテプランを追加すると、オイル交換・タイヤ交換・故障時のロードサービスなども月額に含めることができます。" },
    { q: "契約満了後、車はどうなりますか？", a: "サービスや契約内容によって異なります。①返却して新しい車に乗り換える、②そのまま再リース契約する、③残価で買い取るという選択肢があることが多いです。" },
  ];

  return (
    <section id="faq" style={{ padding: "80px 20px", background: "white" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            background: "var(--blue-100)", color: "var(--blue-600)",
            fontWeight: 700, fontSize: 13, padding: "4px 14px", borderRadius: 99
          }}>FAQ</span>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900,
            color: "var(--blue-900)", marginTop: 16
          }}>よくある質問</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              border: "2px solid",
              borderColor: open === i ? "var(--blue-400)" : "var(--gray-200)",
              borderRadius: 14, overflow: "hidden",
              transition: "border-color 0.2s"
            }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", background: open === i ? "var(--blue-50)" : "white",
                  border: "none", padding: "20px 24px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 16, cursor: "pointer", transition: "background 0.2s"
                }}>
                <span style={{
                  fontWeight: 700, fontSize: 15, color: "var(--blue-900)",
                  textAlign: "left", lineHeight: 1.5
                }}>Q. {faq.q}</span>
                <span style={{
                  color: "var(--blue-500)", fontSize: 22, fontWeight: 300,
                  flexShrink: 0, transition: "transform 0.3s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0)"
                }}>+</span>
              </button>
              {open === i && (
                <div style={{
                  padding: "0 24px 20px", color: "var(--gray-600)",
                  fontSize: 14, lineHeight: 1.9, borderTop: "1px solid var(--blue-100)"
                }}>
                  <div style={{ paddingTop: 16 }}>A. {faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
