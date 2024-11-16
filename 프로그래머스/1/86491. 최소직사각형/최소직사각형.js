function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    const width = [];
    const height = [];

    for (let i = 0; i < rotated.length; i++) {
        width.push(rotated[i][0]);
        height.push(rotated[i][1]);
    }

    return Math.max(...width) * Math.max(...height);
}