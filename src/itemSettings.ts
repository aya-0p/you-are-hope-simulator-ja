export const images: Array<ItemSettings> = [
  {
    id: "100_001",
    name: "不明",
    fileName: "biome_unknown_1.png",
    x: 55,
    y: 55
  }, {
    id: "100_002",
    name: "不明",
    fileName: "biome_unknown_2.png",
    x: 55,
    y: 55
  }, {
    id: "100_003",
    name: "不明",
    fileName: "biome_unknown_3.png",
    x: 55,
    y: 55
  }, {
    id: "100_004",
    name: "不明",
    fileName: "biome_unknown_4.png",
    x: 55,
    y: 55
  }, {
    id: "100_005",
    name: "不明",
    fileName: "biome_unknown_5.png",
    x: 55,
    y: 55
  }, {
    id: "100_006",
    name: "不明",
    fileName: "biome_unknown_6.png",
    x: 55,
    y: 55
  }, {
    id: "100_007",
    name: "不明",
    fileName: "biome_unknown_7.png",
    x: 55,
    y: 55
  }, {
    id: "100_008",
    name: "不明",
    fileName: "biome_unknown_8.png",
    x: 55,
    y: 55
  }, {
    id: "100_009",
    name: "不明",
    fileName: "biome_unknown_9.png",
    x: 55,
    y: 55
  }, {
    id: "100_010",
    name: "不明",
    fileName: "biome_unknown_10.png",
    x: 55,
    y: 55
  }, {
    id: "100_011",
    name: "不明",
    fileName: "biome_unknown_11.png",
    x: 55,
    y: 55
  }, {
    id: "100_012",
    name: "不明",
    fileName: "biome_unknown_12.png",
    x: 55,
    y: 55
  }, {
    id: "100_013",
    name: "不明",
    fileName: "biome_unknown_13.png",
    x: 55,
    y: 55
  }, {
    id: "100_014",
    name: "不明",
    fileName: "biome_unknown_14.png",
    x: 55,
    y: 55
  }, {
    id: "100_015",
    name: "不明",
    fileName: "biome_unknown_15.png",
    x: 55,
    y: 55
  }, {
    id: "100_016",
    name: "不明",
    fileName: "biome_unknown_16.png",
    x: 55,
    y: 55
  }
]
/**
 * # アイテムID
 * - 例: 101_001
 * ## アイテムの種類(3桁)
 * - 000: 何もなし
 * - 0xx: アイテム以外
 * 
 * - 1xx: layer1(バイオーム)
 * - 100: 不明
 * - 101: 草原
 * - 102: 砂漠
 * - 103: 牧草地
 * - 104: 雪原
 * - 105: 湿地
 * - 106: 高原
 * - 107: ジャングル
 * 
 * - 200: layer2(床などさらに上にアイテムを置けるもの)
 * 
 * - 3xx: layer3(床などの上に置けるもの)
 * - 301: 植物
 * - 302: 食べ物
 * - 303: 銑鉄製品
 * - 304: 鋼製品
 * - 305: 銅製品
 * - 306: 木製製品
 * 
 * - 4xx: layer4(その他に何も置けないもの)
 * - 40x: 通行可
 * - 41x: 通行不可
 * ## アイテム識別値(3桁)
 * - 001から開始
 * ## 
 */
interface ItemSettings {
  // アイテムID
  id: string;
  // アイテム名(日本語)
  name: string;
  // ファイル名
  fileName: string;
  // x座標のずれ
  x: number;
  // y座標のずれ
  y: number;
}