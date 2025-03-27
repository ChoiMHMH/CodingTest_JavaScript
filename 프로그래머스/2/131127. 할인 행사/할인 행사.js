// function solution(want, number, discount) {
//     const wantMap = {};
//     for (let i = 0; i < want.length; i++) {
//         wantMap[want[i]] = number[i];
//     }

//     let result = 0;


//     for (let i = 0; i <= discount.length - 10; i++) {
//         const currentWindow = discount.slice(i, i + 10);
//         const currentMap = {};

//         for (const item of currentWindow) {
//             currentMap[item] = (currentMap[item] || 0) + 1;
//         }

//         let isValid = true;
//         for (const item in wantMap) {
//             if (currentMap[item] !== wantMap[item]) {
//                 isValid = false;
//                 break;
//             }
//         }

//         if (isValid) result++;
//     }

//     return result;
// }
function solution(want, number, discount) {
    let count = 0;
    for (let i = 0; i < discount.length - 9; i++) {
        const slice = discount.slice(i, i+10);

        let flag = true;
        for (let j = 0; j < want.length; j++) {
            if (slice.filter(item => item === want[j]).length !== number[j]) {
                flag = false;
                break;
            }
        }
        if (flag) count += 1;
    }
    return count;
}
