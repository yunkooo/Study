function answer(arr){
    let max = arr[0];
    
    for (let i=0; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}


let input = [
    [1, 6, 5, 2, 3],
    [19, 41, 23, -4, 17],
    [-64, -27, -41, -33, -59],
]


for(let i=0; i<input.length; i++){
    console.log(`#${i+1} ${answer(input[i])} `)
};