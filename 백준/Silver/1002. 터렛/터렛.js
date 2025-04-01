const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString();

function turret(input) {
  const cases = input.trim().split("\n");
  const T = parseInt(cases[0]);
  const results = [];

  for (let i = 1; i <= T; i++) {
    const [x1, y1, r1, x2, y2, r2] = cases[i].split(" ").map(Number);

    const dx = x2 - x1;
    const dy = y2 - y1;
    const distanceSquared = dx * dx + dy * dy;
    const distance = Math.sqrt(distanceSquared);

    const sumRadii = r1 + r2;
    const diffRadii = Math.abs(r1 - r2);

    if (distance === 0 && r1 === r2) {
      // 두 원이 동일한 경우 (무한대의 교점)
      results.push(-1);
    } else if (distance > sumRadii || distance < diffRadii) {
      // 두 원이 서로 멀리 떨어져 있거나 한 원이 다른 원 안에 포함된 경우 (교점 없음)
      results.push(0);
    } else if (distance === sumRadii || distance === diffRadii) {
      // 두 원이 외접하거나 내접하는 경우 (교점 1개)
      results.push(1);
    } else {
      // 두 원이 서로 겹치는 경우 (교점 2개)
      results.push(2);
    }
  }

  return results.join("\n");
}
console.log(turret(input));
