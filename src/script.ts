import { images } from "./itemSettings.js";
import menu from "./menu.js";
import { debug } from "./scriptSettings.js";
menu(debug);
interface Setting {
  /* 画面拡大率 */
  zoom: number;
  /* 現在選択中のアイテム */
  item: string;
  /* 現在選択中のアイテムのレイヤー */
  layer: "layer1" | "layer2" | "layer3" | "layer4";
  /* グリッドの表示 */
  grid: boolean;
  click: boolean;
  clickedList: Array<string>;
  block: number;
  /**
   * webサーバーを立てるか
   * 本番環境ではfalse
   * webサーバーを起動せず、ローカルで見る場合はtrue(画像保存不可)
   */
  debug: boolean;
  /**
   * 全体に表示されるバイオーム
   */
  biome: Biome;
}
interface PointData {
  // バイオーム
  layer1?: string;
  // 床などさらに上にアイテムを置けるもの
  layer2?: string;
  // 床などの上に置けるもの
  layer3?: string;
  //その他に何も置けないもの
  layer4?: string;
  /**
   * ## 座標について
   * 以下のように示す
   * +---------------(+x)
   * |(0,0)　　　(n,0)
   * |
   * |
   * |
   * |
   * |(0,m)
   * (+y)
   */
  x: number;
  y: number;
}
interface Item {
  img: HTMLImageElement;
  x: number;
  y: number;
}
enum Biome {
  unknown = "100_",
  grasslands = "101_",
  desert = "102_",
  yellow_prairies = "103_",
  tundra = "104_",
  swamps = "105_",
  badlands = "106_",
  jungle = "107_",
}

class Main {
  public readonly canvas: HTMLCanvasElement = (() => {
    //キャンバスを取得
    const canvas = document.getElementById("canvas");
    if (!canvas || !(canvas instanceof HTMLCanvasElement))
      throw new Error("canvas is not found");
    //大きさを画面最大に
    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;
    return canvas;
  })();
  public readonly ctx: CanvasRenderingContext2D = (() => {
    const ctx = this.canvas.getContext("2d");
    if (!ctx) throw new Error("canvas context is not found");
    return ctx;
  })();
  public readonly settings: Setting = {
    zoom: 0.5,
    item: "",
    grid: true,
    click: false,
    clickedList: [],
    block: 130,
    debug: true,
    biome: Biome.unknown,
    layer: "layer1",
  };
  public readonly images: Map<string, Item> = new Map(
    images.map((item) => {
      const img = new Image();
      img.src = `./res/${item.fileName}`;
      return [item.id, { img, x: item.x, y: item.y }];
    })
  );
  /**
   * key: [x]_[y]
   */
  public readonly projectData: Map<string, PointData> = new Map();
  public draw = () =>
    new Promise<void>((resolve) => {
      const xBlocks = Math.ceil(
        this.ctx.canvas.width / (this.settings.block * this.settings.zoom)
      );
      const yBlocks = Math.ceil(
        this.ctx.canvas.height / (this.settings.block * this.settings.zoom)
      );
      // 描画前にキャンバスをクリア
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // バイオームを描画
      for (let x = 0; x < xBlocks; x++) {
        for (let y = 0; y < yBlocks; y++) {
          const biome_ =
            this.projectData.get(`${x}_${y}`)?.layer1 ?? this.settings.biome;
          const biomeId =
            biome_ +
            String(
              ((x + y * 1000) %
                Array(...this.images.keys()).filter((value) =>
                  value.match(RegExp(`${biome_}...`))
                ).length) +
                1
            ).padStart(3, "0");
          const biome = this.images.get(biomeId);
          if (!biome) {
            console.error("バイオームが見つかりませんでした", biomeId);
            continue;
          }
          this.ctx.drawImage(
            biome.img,
            (x * this.settings.block - biome.x) * this.settings.zoom,
            (y * this.settings.block - biome.y) * this.settings.zoom,
            biome.img.width * this.settings.zoom,
            biome.img.height * this.settings.zoom
          );
        }
      }
      // アイテムを描画
      for (const [_$, data] of this.projectData) {
        if (data.x > xBlocks || data.y > yBlocks) continue;
        if (data.layer4) {
          const item = this.images.get(data.layer4);
          if (!item) {
            console.error("アイテムが見つかりませんでした", data.layer4);
            continue;
          }
          this.ctx.drawImage(
            item.img,
            (data.x * this.settings.block - item.x) * this.settings.zoom,
            (data.y * this.settings.block - item.y) * this.settings.zoom,
            item.img.width * this.settings.zoom,
            item.img.height * this.settings.zoom
          );
        } else {
          if (data.layer2) {
            const item = this.images.get(data.layer2);
            if (!item) {
              console.error("アイテムが見つかりませんでした", data.layer2);
              continue;
            }
            this.ctx.drawImage(
              item.img,
              (data.x * this.settings.block - item.x) * this.settings.zoom,
              (data.y * this.settings.block - item.y) * this.settings.zoom,
              item.img.width * this.settings.zoom,
              item.img.height * this.settings.zoom
            );
          }
          if (data.layer3) {
            const item = this.images.get(data.layer3);
            if (!item) {
              console.error("アイテムが見つかりませんでした", data.layer3);
              continue;
            }
            this.ctx.drawImage(
              item.img,
              (data.x * this.settings.block - item.x) * this.settings.zoom,
              (data.y * this.settings.block - item.y) * this.settings.zoom,
              item.img.width * this.settings.zoom,
              item.img.height * this.settings.zoom
            );
          }
        }
      }
      // グリッドを描画
      if (this.settings.grid) {
        this.ctx.strokeStyle = "rgba(0,0,0,0.5)";
        this.ctx.lineWidth = 3;
        for (let x = 0; x < xBlocks; x++) {
          this.ctx.beginPath();
          this.ctx.moveTo(x * this.settings.block * this.settings.zoom, 0);
          this.ctx.lineTo(
            x * this.settings.block * this.settings.zoom,
            this.ctx.canvas.height
          );
          this.ctx.stroke();
        }
        for (let y = 0; y < yBlocks; y++) {
          this.ctx.beginPath();
          this.ctx.moveTo(0, y * this.settings.block * this.settings.zoom);
          this.ctx.lineTo(
            this.ctx.canvas.width,
            y * this.settings.block * this.settings.zoom
          );
          this.ctx.stroke();
        }
      }
      return resolve();
    });
  public toJSON = () =>
    new Promise<string>((resolve) => {
      const jsonData: Array<[string, PointData]> = [];
      for (const data of this.projectData) {
        jsonData.push(data);
      }
      return resolve(JSON.stringify(jsonData));
    });
  public changeData(x: number, y: number): void {
    if (this.settings.clickedList.includes(`${x}_${y}`)) return;
    else this.settings.clickedList.push(`${x}_${y}`);
    const clickX = Math.floor(x / (this.settings.block * this.settings.zoom));
    const clickY = Math.floor(y / (this.settings.block * this.settings.zoom));
    const pointData = (() => {
      const data = this.projectData.get(`${clickX}_${clickY}`);
      if (data) return data;
      const newData: PointData = {
        x: clickX,
        y: clickY,
      };
      this.projectData.set(`${clickX}_${clickY}`, newData);
      return newData;
    })();
    pointData[this.settings.layer] = this.settings.item;
  }
}
export var result = new Main();
result.canvas.addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    result.settings.click = true;
    result.changeData(event.offsetX, event.offsetY);
  }
});
result.canvas.addEventListener("mouseup", (event) => {
  if (event.button === 0) {
    result.settings.click = false;
    result.settings.clickedList = [];
  }
});
result.canvas.addEventListener("mousemove", (event) => {
  if (event.button === 0 && result.settings.click) {
    result.changeData(event.offsetX, event.offsetY);
  }
});
// 60fpsで描画
setInterval(() => {
  result.draw();
}, 1000 / 60);
