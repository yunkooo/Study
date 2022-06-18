function answer(x, y) {
    let result = [];
    if (x < y) {
        for ( i=x; i<=y; i++){
            result.push(i);
        }
    }
    else {
        for (i=y; i<=x; i++){
            result.push(i);
        }
    }


    return result;
}

let input = [
    [3, 7],
    [8, 3],
    [12, 10],
];

for (let i = 0; i<input.length; i++) {
    console.log(answer(input[i][0], input[i][1]));
}

// 다른 방법
//[x,y] = [y,x]
// 임의의 변수 만들어서 진행