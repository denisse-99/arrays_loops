//Preparar constantes
//Preparar funciones
//Obtener la primer letra de cada nombre
//Ordenar alfabéticamente
//Imprimir

const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
const member3 = ["Harry", "Ron", "Hermione"];

function secretName(arr) {
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    return res.sort().join("");
    //console.log(res.sort());
    // arr.forEach((e) => console.log(e.chartAt(0)));
}

secretName(member1);
secretName(member2);
secretName(member3);