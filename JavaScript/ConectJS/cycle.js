function answer(user){
    let reverse = [];

    // for (let i=user.length-1; i>=0; i--){
    //     reverse.push(user[i])
    // }


    let tmp;
    for (let i=0; i<user.length/2; i++){
        tmp = user[i];
        user[i] = user[user.length-1-i];
        user[user.length-1-i] =tmp;
    }
    reverse = user;

    return reverse;
}

let input = [
    [1,2,3,4],
    [-1,6,"hello",-15],
    ["apple","banana","mango"],
];
for(let i=0; i<input.length; i++){
    console.log(answer(input[i]));
};