function solution(operations) {
    let queue = [];

    for (let operation of operations) {
        let [command, value] = operation.split(" ");
        value = Number(value);

        if (command === "I") {
            queue.push(value);
            queue.sort((a, b) => a - b);
        } else if (command === "D" && queue.length > 0) {
            if (value === 1) {
                queue.pop();
            } else if (value === -1) {
                queue.shift();
            }
        }
    }

    if (queue.length === 0) {
        return [0, 0];
    } else {
        return [queue[queue.length - 1], queue[0]];
    }
}
