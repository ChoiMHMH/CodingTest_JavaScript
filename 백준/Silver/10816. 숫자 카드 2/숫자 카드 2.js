const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [M, cards, N, userCard] = input;

const count = {};
for (let card of cards) {
  count[card] = 0;
}
for (let card of cards) {
  count[card] += 1;
}
//{ '2': 1, '3': 2, '6': 1, '7': 1, '10': 3, '-10': 2 }

const answer = userCard.map((el) => {
  if (count[el]) {
    return count[el];
  } else {
    return 0;
  }
});

console.log(answer.join(" "));
