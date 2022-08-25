//canvas取得
const canvas = document.getElementById("canvas")
if (!canvas || !(canvas instanceof HTMLCanvasElement)) throw new Error()
const ctx = canvas.getContext("2d")
if (!ctx) throw new Error()

//大きさを画面最大に
canvas.height = document.body.clientHeight
canvas.width = document.body.clientWidth

//すべてのアイテムをロード
let imageLoadStatus: number = 0
const imageItems: Map<string, Items> = (() => {
  const imageItemsOriginal: Array<TItems> = [

  ]
  const imageItemsMap: Map<string, Items> = new Map()
  imageItemsOriginal.forEach(item => {
    const img = new Image()
    img.src = item.path
    imageItemsMap.set(item.name, {
      width: item.width,
      height: item.height,
      center: item.center,
      img: img,
      name: item.name,
      category: item.category
    })
    img.addEventListener('load', () => {
      imageLoadStatus++
    }, false);
  })
  return imageItemsMap
})()

//interface
interface Point {
  x: number;
  y: number;
}
interface TItems {
  width: number;
  height: number;
  center: Point;
  path: string;
  name: string;
  category: number;
}
interface Items {
  width: number;
  height: number;
  center: Point;
  img: HTMLImageElement;
  name: string;
  category: number;
}