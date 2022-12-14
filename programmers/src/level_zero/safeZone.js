// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

function safeZone(board) {
  let safe = 0;

  // 위험지역 Set
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] === 1) setArea(board, x, y);
    }
  }

  // 안전지역 Count
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] == 0) safe++;
    }
  }

  return safe;

  function setArea(param, x, y) {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        try {
          if (param[x + i][y + j] == 0) param[x + i][y + j] = 2;
        }
        catch(Error) {
        }
      }
    }
  }
}

export default { safeZone };
