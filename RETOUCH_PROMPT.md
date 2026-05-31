# 幼稚園・保育園 発表会写真 レタッチプロンプト

## 写真の特徴（このサンプルから）

- **シーン**: 幼稚園の舞台劇（オズの魔法使い）
- **照明**: ステージスポットライト＋自然なアンビエント光
- **背景**: 手描きの明るい色彩のセット（黄・赤・緑・青）、深紅のカーテン
- **被写体**: 東アジア系の子ども（3〜5歳）
- **仕上がりイメージ**: 明るく自然、温かみがあり記念感のある写真

---

## Lightroom / Capture One レタッチ設定ガイド

### ライト（露出）
| 項目 | 値 | 備考 |
|------|-----|------|
| 露光量 | +0.3〜+0.5 | ステージ照明のアンダーを補正 |
| コントラスト | -5〜-10 | フラットに整えて肌を柔らかく |
| ハイライト | -15〜-25 | 舞台照明の白飛びを抑える |
| シャドウ | +20〜+35 | 暗部の子どもの表情を起こす |
| 白レベル | +5〜+10 | |
| 黒レベル | -5 | 締まりを持たせる |

### カラー（色調）
| 項目 | 値 | 備考 |
|------|-----|------|
| 色温度 | +100〜+200K（温かく） | ステージ光に合わせる |
| 色かぶり補正 | +3〜+5（マゼンタ寄り） | 緑かぶりを防ぐ |
| 彩度 | +5〜+10 | 背景セットの鮮やかさを活かす |
| 自然な彩度 | +10〜+15 | 肌色を守りつつ全体を華やかに |

### HSL カラー調整
| チャンネル | 色相 | 彩度 | 輝度 |
|-----------|------|------|------|
| レッド（カーテン）| 0 | -10 | +5 |
| オレンジ（肌色）| 0 | +5 | +10 |
| イエロー（背景）| 0 | +5 | +5 |
| グリーン（背景）| 0 | +5 | 0 |

### シャープネス＆ノイズ
| 項目 | 値 |
|------|-----|
| シャープネス量 | 40〜60 |
| 半径 | 1.0 |
| マスク（Alt+スライダー） | 顔・衣装にのみかかるよう調整 |
| ノイズ軽減（輝度） | 20〜30（ISO高い場合） |
| カラーノイズ軽減 | 25 |

### レンズ補正
- 周辺光量補正: ON（自動）
- 色収差補正: ON（自動）

---

## AI 画像生成・編集ツール用プロンプト（英語）

### スタイル参照プロンプト（Adobe Firefly / Generative Fill 等）

```
Photo retouching style: natural and warm kindergarten stage performance. 
Soft, clean skin tones for Asian children aged 3-5. 
Warm color temperature, slightly lifted shadows to reveal faces under stage lighting. 
Vibrant but not oversaturated painted backdrop colors (yellows, reds, greens). 
Deep red curtain background. Natural, joyful, memory-like quality. 
Avoid heavy skin retouching — preserve natural child expressions.
```

### ネガティブ指示（避けるべき処理）
```
Avoid: heavy skin smoothing, dramatic vignette, oversaturated colors, 
cool/blue color grading, dark moody tones, HDR effect, AI face alteration.
```

---

## 一括処理（バッチ）推奨ワークフロー

1. **1枚目をマスターとしてレタッチ**し、上記設定を適用
2. **同じ照明シーンの写真にプリセット同期**（露出値のみ個別微調整）
3. **顔の明るさ**は「マスク→人物→顔の肌」で個別に+0.2〜+0.5 補正
4. **書き出し設定**: JPEG / 品質90 / sRGB / 長辺2048px（Web用）または長辺4000px（印刷用）

---

## 注意事項

- 子どもの写真のため、**顔のAI修正（目拡大・肌過剰補正）は行わない**
- 保護者配布用データは**個人情報保護に注意**（クラウド共有時はパスワード設定推奨）
- 舞台の背景セットの色が強いため、**肌色チャンネルのみ個別調整**が有効
