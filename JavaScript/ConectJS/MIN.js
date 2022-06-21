function answer(x, y) {
    let min;

    // if 풀이법
    // if (x<y) min =x;
    // else min = y;

    min = (x<y) ? x : y;
    // 삼항연산자 이용가능

    return min;
}


let input =[
    [16, 3],
    [-3, 1],
    [1000, 525],
]

for (let i=0; i< input.length; i++){
    console.log(`#${i+1} ${answer(input[i][0],input[i][1])}`)
};