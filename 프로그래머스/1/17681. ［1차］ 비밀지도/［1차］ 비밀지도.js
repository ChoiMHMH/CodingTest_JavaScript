function solution(n, arr1, arr2) {
  return arr1.map((v, i) => {
    // 두 지도 각 행을 OR 연산 -> 2진수 변환 -> padStart로 n길이 맞춤 -> #/공백 변환
    return (v | arr2[i])
      .toString(2)
      .padStart(n, '0')
      .replace(/1/g, '#')
      .replace(/0/g, ' ');
  });
}
