function arrayMulti(number, length) {
    let multi = [];

    for (let i = 1; i <= length; i++) {
        multi.push(number * i);
    }
    return multi;
}

console.log(arrayMulti(2, 10));
console.log(arrayMulti(17, 6)); 