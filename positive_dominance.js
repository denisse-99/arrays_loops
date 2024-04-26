function positiveDom(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count > arr.length / 2;
}

console.log(positiveDom([-1, -3, -5, 4, 6767]));