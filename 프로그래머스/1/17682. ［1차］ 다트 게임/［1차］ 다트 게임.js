function solution(dartResult) {
  // 점수, 보너스, 옵션 추출
  const regex = /(\d{1,2})([SDT])([*#]?)/g;
  const tokens = [...dartResult.matchAll(regex)];
    console.log(tokens)
  const scores = [];

  for (let i = 0; i < tokens.length; i++) {
    let [ , num, bonus, option ] = tokens[i];
    num = Number(num);

    // 보너스 처리
    if (bonus === 'S') num = Math.pow(num, 1);
    else if (bonus === 'D') num = Math.pow(num, 2);
    else if (bonus === 'T') num = Math.pow(num, 3);

    // 옵션 처리
    if (option === '*') {
      num *= 2;
      if (i > 0) scores[i - 1] *= 2; // 이전 점수 2배
    } else if (option === '#') {
      num *= -1;
    }

    scores.push(num);
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
}
