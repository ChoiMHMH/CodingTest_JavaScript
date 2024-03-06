const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

if (input % 10 !== 0) {
  console.log(-1);
} else {
  let time = input;
  const answer = [0, 0, 0];

  let A = Math.floor(time / 300);
  time = time - A * 300;

  let B = Math.floor(time / 60);
  time = time - B * 60;

  let C = Math.floor(time / 10);
  time = time - C * 10;

  answer[0] = A;
  answer[1] = B;
  answer[2] = C;
  console.log(answer.join(" "));
}
