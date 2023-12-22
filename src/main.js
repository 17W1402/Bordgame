const gameBoard = {
  square1: { next: "square2", event: null },
  square2: { next: "square3", event: { type: "gain", value: 100 } },
  square3: { next: ["square4A", "square4B"], event: null },
  // その他のマス
  squareN: { next: null, event: null },
};

// プレイヤーの現在位置を追跡する
let currentPlayerPosition = "square1";

// プレイヤーを次のマスに移動する関数
function moveToNextSquare() {
  const currentSquare = gameBoard[currentPlayerPosition];
  if (Array.isArray(currentSquare.next)) {
    // 分岐点の処理
    // ここでユーザーに選択させるロジックを追加
  } else {
    currentPlayerPosition = currentSquare.next;
    // マスのイベントの処理
    if (currentSquare.event) {
      handleEvent(currentSquare.event);
    }
  }

  // DOMの更新
  updatePlayerPositionOnDOM(currentPlayerPosition);
}

// イベントの処理（例：所持金の増減）
function handleEvent(event) {
  if (event.type === "gain") {
    // 所持金の増加処理
  }
  // その他のイベントタイプに対する処理
}

// DOMのプレイヤー位置を更新する関数
function updatePlayerPositionOnDOM(position) {
  // ここでDOM要素を更新して、プレイヤーの位置を表示
}
