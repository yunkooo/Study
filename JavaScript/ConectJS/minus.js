function answer(s, e) {
    let sequence = [];

    sequence.push(s);
    sequence.push(e);
    let i=0;


    while (true) {
        if (sequence[i]-sequence[i+1] < 0){
            break;
        }
        else{
            sequence.push(sequence[i]-sequence[i+1]);
            i++;  
        }
    }
    return sequence;
}


let input = [
    [9,3],[6,3],[13,7],
];

for (let i=0; i < input.length; i++) {
    console.log(answer(input[i][0],input[i][1]));
}