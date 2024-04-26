function promeAntipodal(arr) {
    
    let middle = Math.floor(arr.length / 2);
    if (arr.length % 2 !== 0) {
        arr.slice(middle, 1); 
    }

    let half1 = arr.slice(0, middle);
    let half2 = arr.slice(middle);

    let result = [];
    for (let i = 0; i < half1.length; i++) {
        let sum = half1[i] + 1/half2[i];
        result.push(sum / 2);
    }
    return result;
}

console.log(promeAntipodal([1, 2, 3, 5, 22, 6]));

