function solution(k, score) {
    const hallOfFame = [];
    const result = [];

    for (let i = 0; i < score.length; i++) {
        hallOfFame.push(score[i]);
        hallOfFame.sort((a, b) => b - a);

        if (hallOfFame.length > k) {
            hallOfFame.pop();
        }

        result.push(hallOfFame[hallOfFame.length - 1]);
    }

    return result;
}
