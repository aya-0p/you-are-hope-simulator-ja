"use strict";
//canvas取得
const canvas = document.getElementById("canvas");
if (!canvas || !(canvas instanceof HTMLCanvasElement))
    throw new Error();
const ctx = canvas.getContext("2d");
if (!ctx)
    throw new Error();
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;
//すべてのアイテムをロード
let imageLoadStatus = 0;
const imageItems = (() => {
    const imageItemsOriginal = [];
    const imageItemsMap = new Map();
    imageItemsOriginal.forEach(item => {
        const img = new Image();
        img.src = item.path;
        imageItemsMap.set(item.name, {
            width: item.width,
            height: item.height,
            center: item.center,
            img: img,
            name: item.name,
            category: item.category
        });
        img.addEventListener('load', () => {
            imageLoadStatus++;
        }, false);
    });
    return imageItemsMap;
})();
