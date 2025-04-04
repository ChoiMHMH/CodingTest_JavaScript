const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 보드 크기
const K = Number(input[1]); // 사과 개수
const apples = input.slice(2, 2 + K).map((el) => el.split(" ").map(Number));

// 방향 전환 정보 파싱
const L = Number(input[2 + K]); // 방향 전환 횟수
const directions = input.slice(3 + K, 3 + K + L).map((el) => {
  const [X, C] = el.split(" ");
  return [Number(X), C];
});

function snakeGame(N, apples, directions) {
  // 방향 벡터: 오른쪽(0), 아래(1), 왼쪽(2), 위(3)
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  // 보드 초기화
  const board = Array.from({ length: N }, () => Array(N).fill(0));
  for (const [x, y] of apples) {
    board[x - 1][y - 1] = 1; // 사과 위치 표시 (1-based index를 0-based로 변환)
  }

  let time = 0;
  let direction = 0; // 초기 방향: 오른쪽
  let snake = [[0, 0]]; // 뱀의 위치 (꼬리부터 머리까지)
  board[0][0] = 2; // 뱀이 있는 위치 표시

  let directionIndex = 0;

  while (true) {
    time++;

    // 뱀의 머리 이동
    const [headX, headY] = snake[snake.length - 1];
    const nextX = headX + dx[direction];
    const nextY = headY + dy[direction];

    // 벽이나 자기 몸에 부딪히면 게임 종료
    if (
      nextX < 0 ||
      nextX >= N ||
      nextY < 0 ||
      nextY >= N ||
      board[nextX][nextY] === 2
    ) {
      break;
    }

    // 이동한 칸에 사과가 있으면 먹고 꼬리는 그대로
    if (board[nextX][nextY] === 1) {
      board[nextX][nextY] = 2;
      snake.push([nextX, nextY]);
    } else {
      // 사과가 없으면 꼬리를 줄임
      board[nextX][nextY] = 2;
      snake.push([nextX, nextY]);
      const [tailX, tailY] = snake.shift();
      board[tailX][tailY] = 0;
    }

    // 방향 전환 처리
    if (
      directionIndex < directions.length &&
      directions[directionIndex][0] === time
    ) {
      const turn = directions[directionIndex][1];
      direction = turn === "L" ? (direction + 3) % 4 : (direction + 1) % 4;
      directionIndex++;
    }
  }

  return time;
}

console.log(snakeGame(N, apples, directions));
