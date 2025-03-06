const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" ").map(Number));

const N = input[0][0];
const meetings = input.slice(1);

function solveMeetingRooms(meetings) {
    meetings.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });

    let count = 0;
    let endTime = 0;

    for (const [start, end] of meetings) {
        if (start >= endTime) {
            count++;
            endTime = end;
        }
    }

    return count;
}

console.log(solveMeetingRooms(meetings));
