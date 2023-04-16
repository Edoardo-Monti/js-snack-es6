/*

Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array generato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

*/

const array = ["luca", "marco", "livo", "artu", "spina"]
a = 1
b = 4

//creo una funzione 
function myFunction(array,a, b){
    //prendo ogni elemento del mio array con la posizione
    // array.forEach((element, index) => {
    //     console.log(element, index)
        
    //     return element
    // });
    let array2 = array.filter(pippo => index > a && index < b)
        console.log(array2)
    return array
}

console.log(myFunction(array))
