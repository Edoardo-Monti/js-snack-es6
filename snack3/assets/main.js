/*

Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array generato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

*/

const array = ["luca", "marco", "livo", "artu", "spina"]
numberUno = 1
numberdue = 4

function myFunction(array,numberUno, numberdue){
    array.forEach((element, index) => {
        console.log(element)
        return element
    });
    return array
}

console.log(myFunction(array))
