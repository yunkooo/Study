function answer(arr) {
    let new_arr = [];

    new_arr = Array.from(new Set(arr));
    
    return new_arr;
}

let input = [
    ["john","alice","alice"],
    ["Hello","hello","HELLO","hello"],
    ["kiwi","banana","mango","kiwi","banana"],
];


for(let i=0; i<input.length; i++){
    console.log(answer(input[i]));
};


