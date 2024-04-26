//Obtener conteo total
//Imprimir primeras 2 personas user == 1
//Imprimir primeras 2 personas users == 2
//Imprimir primeras 2 personas + conteo users >=2

const users = ["mockIng99", "J0eyPunch", "glassedFer", "hello1"];

function displayUsers(arr) {
    const count = users.length;
    let res;
    if (count === 1) {
        res = `${arr[0]} is online`;
    } else if (count === 2) {
        res = `${arr[0]}, ${arr[1]} are online`;
    } else {
       res = `${arr[0]}, ${arr[1]} and ${count - 2} more are online`; 
    }
    return res;
}

console.log(displayUsers(users));