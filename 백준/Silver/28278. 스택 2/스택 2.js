const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]); // 명령의 수
const commands = input.slice(1); // 명령 리스트

const stack = [];
const result = [];

for (let i = 0; i < N; i++) {
  const command = commands[i].split(' ');

  switch (command[0]) {
    case '1': // 1 X: 정수 X를 스택에 넣는다.
      stack.push(parseInt(command[1]));
      break;

    case '2': // 2: 스택의 맨 위 정수를 빼고 출력. 없으면 -1 출력.
      result.push(stack.length > 0 ? stack.pop() : -1);
      break;

    case '3': // 3: 스택에 들어있는 정수의 개수를 출력.
      result.push(stack.length);
      break;

    case '4': // 4: 스택이 비어있으면 1, 아니면 0을 출력.
      result.push(stack.length === 0 ? 1 : 0);
      break;

    case '5': // 5: 스택의 맨 위 정수를 출력. 없으면 -1 출력.
      result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;

    default:
      break;
  }
}

console.log(result.join('\n'));
