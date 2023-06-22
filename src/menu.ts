export default (debug: boolean) => {
  const hide = () => {
    //メニューを非表示にする
    const menu2 = document.getElementsByClassName("menu2");
    for (let i = 0; i < menu2.length; i++) {
      const element = menu2[i];
      if (element && (element as any)?.style instanceof CSSStyleDeclaration)
        ((element as any).style as CSSStyleDeclaration).display = "none";
    }
  };
  const createMap = () => {
    //新規マップ作成
    //保存されていなければ保存するかどうか聞く
    hide();
    if (debug) console.debug("createMap");
  };
  const openMap = () => {
    //マップを開く
    //保存されていなければ保存するかどうか聞く
    hide();
    if (debug) console.debug("openMap");
  };
  const importMap = () => {
    //マップをインポート
    //保存されていなければ保存するかどうか聞く
    hide();
    if (debug) console.debug("importMap");
  };
  const saveMap = () => {
    //保存
    //名前がついていなければsaveAsMapに飛ぶ
    hide();
    if (debug) console.debug("saveMap");
  };
  const saveAsMap = () => {
    //名前を付けて保存
    hide();
    if (debug) console.debug("saveAsMap");
  };
  const exportMapImage = () => {
    //マップを画像として保存
    hide();
    if (debug) console.debug("exportMapImage");
  };
  const exportMapData = () => {
    //マップをデータとして保存
    //ファイル: <map_name>.json
    hide();
    if (debug) console.debug("exportMapData");
  };
  const undo = () => {
    //元に戻す
    hide();
    if (debug) console.debug("undo");
  };
  const redo = () => {
    //やり直す
    hide();
    if (debug) console.debug("redo");
  };
  const cut = () => {
    //選択範囲を切り取り
    //何も選択されていなければ何もしない
    hide();
    if (debug) console.debug("cut");
  };
  const copy = () => {
    //選択範囲をコピー
    //何も選択されていなければ何もしない
    hide();
    if (debug) console.debug("copy");
  };
  const paste = () => {
    //貼り付け
    //クリップボードに何もなければ何もしない
    hide();
    if (debug) console.debug("paste");
  };
  const selectAll = () => {
    //全て選択
    //後で消すかも
    hide();
    if (debug) console.debug("selectAll");
  };
  const delete_ = () => {
    //選択されているアイテムを削除
    hide();
    if (debug) console.debug("delete_");
  };
  const toggleGrid = () => {
    //グリッドの表示/非表示を切り替え
    hide();
    if (debug) console.debug("toggleGrid");
  };
  const zoom25 = () => zoom(0.25);
  const zoom50 = () => zoom(0.5);
  const zoom75 = () => zoom(0.75);
  const zoom100 = () => zoom(1);
  const zoom150 = () => zoom(1.5);
  const zoom200 = () => zoom(2);
  const zoom300 = () => zoom(3);
  const zoom400 = () => zoom(4);
  const zoom = (percent: number) => {
    //拡大率を変更
    hide();
    if (debug) console.debug("zoom", percent);
  };
  const search = () => {
    //アイテムを検索
    hide();
    if (debug) console.debug("search");
  };
  const modeDelete = () => {
    //削除モード
    hide();
    if (debug) console.debug("modeDelete");
  };
  const modeSelect = () => {
    //選択モード
    hide();
    if (debug) console.debug("modeSelect");
  };
  const modeMove = () => {
    //移動モード
    hide();
    if (debug) console.debug("modeMove");
  };
  const recentItems = () => {
    //最近使用したアイテム
    hide();
    if (debug) console.debug("recentItems");
  };
  const biomes = () => {
    //バイオームを指定
    hide();
    if (debug) console.debug("biomes");
  };
  const floors = () => {
    //床アイテム
    hide();
    if (debug) console.debug("floors");
  };
  const walls = () => {
    //壁アイテム
    hide();
    if (debug) console.debug("walls");
  };
  const version = () => {
    //バージョン情報を表示
    hide();
    if (debug) console.debug("version");
  };
  const sourceCode = () => {
    //ソースコードを表示
    hide();
    if (debug) console.debug("sourceCode");
  };
  const closeMap = () => {
    //マップを閉じる
    //保存されていなければ保存するかどうか聞く
    hide();
    if (debug) console.debug("closeMap");
  };
  const exit = () => {
    //終了
    //保存されていなければ保存するかどうか聞く
    //動かないはずなので後で消す
    hide();
    if (debug) console.debug("exit");
  };
  const menus: Array<Menu> = [
    {
      name: "ファイル",
      items: [
        {
          name: "新規作成 (Ctrl+N)",
          onClick: createMap,
        },
        {
          name: "開く (Ctrl+O)",
          onClick: openMap,
        },
        {
          name: "インポート (Ctrl+I)",
          onClick: importMap,
        },
        {
          name: "保存 (Ctrl+S)",
          onClick: saveMap,
        },
        {
          name: "名前を付けて保存 (Ctrl+Shift+S)",
          onClick: saveAsMap,
        },
        {
          name: "エクスポート　　　　　　　　　▶",
          items: [
            {
              name: "画像として保存 (Ctrl+E)",
              onClick: exportMapImage,
            },
            {
              name: "マップデータとして保存",
              onClick: exportMapData,
            },
          ],
        },
        {
          name: "閉じる",
          onClick: closeMap,
        },
        {
          name: "終了",
          onClick: exit,
        },
      ],
    },
    {
      name: "編集",
      items: [
        {
          name: "元に戻す (Ctrl+Z)",
          onClick: undo,
        },
        {
          name: "やり直し (Ctrl+Y)",
          onClick: redo,
        },
        {
          name: "切り取り (Ctrl+X)",
          onClick: cut,
        },
        {
          name: "コピー (Ctrl+C)",
          onClick: copy,
        },
        {
          name: "貼り付け (Ctrl+V)",
          onClick: paste,
        },
        {
          name: "削除 (Del)",
          onClick: delete_,
        },
        {
          name: "すべて選択 (Ctrl+A)",
          onClick: selectAll,
        },
      ],
    },
    {
      name: "表示",
      items: [
        {
          name: "グリッド (Ctrl+G)",
          onClick: toggleGrid,
        },
        {
          name: "ズーム　　　　　▶",
          items: [
            {
              name: "25% (Ctrl+1)",
              onClick: zoom25,
            },
            {
              name: "50% (Ctrl+2)",
              onClick: zoom50,
            },
            {
              name: "75% (Ctrl+3)",
              onClick: zoom75,
            },
            {
              name: "100% (Ctrl+4)",
              onClick: zoom100,
            },
            {
              name: "150% (Ctrl+5)",
              onClick: zoom150,
            },
            {
              name: "200% (Ctrl+6)",
              onClick: zoom200,
            },
            {
              name: "300% (Ctrl+7)",
              onClick: zoom300,
            },
            {
              name: "400% (Ctrl+8)",
              onClick: zoom400,
            },
          ],
        },
      ],
    },
    {
      name: "ツール",
      items: [
        {
          name: "設置　　　　▶",
          items: [
            {
              name: "最近使用したアイテム",
              onClick: recentItems,
            },
            {
              name: "バイオーム",
              onClick: biomes,
            },
            {
              name: "床",
              onClick: floors,
            },
            {
              name: "壁",
              onClick: walls,
            },
            {
              name: "検索 (Ctrl+F)",
              onClick: search,
            },
          ],
        },
        {
          name: "削除",
          onClick: modeDelete,
        },
        {
          name: "選択 (Ctrl+T)",
          onClick: modeSelect,
        },
        {
          name: "移動 (Ctrl+M)",
          onClick: modeMove,
        },
      ],
    },
    {
      name: "ヘルプ",
      items: [
        {
          name: "バージョン情報",
          onClick: version,
        },
        {
          name: "ソースコードを見る",
          onClick: sourceCode,
        },
      ],
    },
  ];
  const menuHtml = document.getElementById("menu");
  if (!menuHtml) throw new Error("menu is not found");
  function createMenu(menu: Menu, depth: number): HTMLLIElement {
    const li = document.createElement("li");
    li.innerText = menu.name;
    if (menu.items) {
      const ul = document.createElement("ul");
      ul.classList.add("menu2");
      menu.items.forEach((item) => {
        const li = createMenu(item, depth + 1);
        li.classList.add("menu3");
        ul.appendChild(li);
      });
      li.appendChild(ul);
      let isEnter = false;
      let lastEventId: number | undefined = undefined;
      li.addEventListener("mouseenter", () => {
        if (lastEventId !== undefined) clearTimeout(lastEventId);
        lastEventId = undefined;
        ul.style.display = "block";
        isEnter = true;
      });
      li.addEventListener("mouseleave", () => {
        isEnter = false;
        if (ul.style.display === "none") return;
        if (depth) {
          lastEventId = setTimeout(() => {
            lastEventId = undefined;
            if (!isEnter) ul.style.display = "none";
          }, 1_000);
        } else ul.style.display = "none";
      });
      if (depth) {
        ul.classList.add("menu4");
      }
    }
    if (menu.onClick) {
      li.addEventListener("click", menu.onClick);
    }
    li.addEventListener("mouseenter", () => {
      li.style.backgroundColor = "darkgray";
      li.style.borderRadius = "5px";
    });
    li.addEventListener("mouseleave", () => {
      li.style.backgroundColor = "transparent";
      li.style.borderRadius = "0px";
    });
    return li;
  }
  menus.forEach((menu) => {
    const element: HTMLLIElement = createMenu(menu, 0);
    element.className = "menu";
    menuHtml.appendChild(element);
  });
  interface Menu {
    name: string;
    items?: Array<Menu>;
    onClick?: () => void;
  }
  
  /**
   * ショートカット一覧
   * Ctrl+N: 新規作成
   * Ctrl+O: 開く
   * Ctrl+I: インポート
   * Ctrl+S: 保存
   * Ctrl+Shift+S: 名前を付けて保存
   * Ctrl+E: エクスポート/画像として保存
   * Ctrl+Z: 元に戻す
   * Ctrl+Y: やり直し
   * Ctrl+X: 切り取り
   * Ctrl+C: コピー
   * Ctrl+V: 貼り付け
   * Del: 削除
   * Ctrl+A: すべて選択
   * Ctrl+G: グリッド
   * Ctrl+1: ズーム25%
   * Ctrl+2: ズーム50%
   * Ctrl+3: ズーム75%
   * Ctrl+4: ズーム100%
   * Ctrl+5: ズーム150%
   * Ctrl+6: ズーム200%
   * Ctrl+7: ズーム300%
   * Ctrl+8: ズーム400%
   * Ctrl+F: 検索
   * Ctrl+T: 選択
   * Ctrl+M: 移動
   */
  window.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.ctrlKey) {
      switch (event.key) {
        case "n":
          createMap();
          break;
        case "o":
          openMap();
          break;
        case "i":
          importMap();
          break;
        case "s":
          saveMap();
          break;
        case "e":
          exportMapImage();
          break;
        case "z":
          undo();
          break;
        case "y":
          redo();
          break;
        case "x":
          cut();
          break;
        case "c":
          copy();
          break;
        case "v":
          paste();
          break;
        case "a":
          selectAll();
          break;
        case "g":
          toggleGrid();
          break;
        case "1":
          zoom25();
          break;
        case "2":
          zoom50();
          break;
        case "3":
          zoom75();
          break;
        case "4":
          zoom100();
          break;
        case "5":
          zoom150();
          break;
        case "6":
          zoom200();
          break;
        case "7":
          zoom300();
          break;
        case "8":
          zoom400();
          break;
        case "f":
          search();
          break;
        case "t":
          modeSelect();
          break;
        case "m":
          modeMove();
          break;
      }
    } else {
      switch (event.key) {
        case "Delete":
          delete_();
          break;
      }
    }
  });
  
};