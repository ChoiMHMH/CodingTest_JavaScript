function solution(want, number, discount) {
    const wantMap = {};
    for (let i = 0; i < want.length; i++) {
        wantMap[want[i]] = number[i];
    }

    let result = 0;


    for (let i = 0; i <= discount.length - 10; i++) {
        const currentWindow = discount.slice(i, i + 10);
        const currentMap = {};

        for (const item of currentWindow) {
            currentMap[item] = (currentMap[item] || 0) + 1;
        }

        let isValid = true;
        for (const item in wantMap) {
            if (currentMap[item] !== wantMap[item]) {
                isValid = false;
                break;
            }
        }

        if (isValid) result++;
    }

    return result;
}
