/*

Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array generato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

*/

const array = ["luca", "marco", "livo", "artu", "spina"]
// a = 1
// b = 4

//creo una funzione 
function myFunction(array,a, b){
    //mi crea un array che mi prende le posizioni comprese tra "a" e "b"
    const prova = array.filter((element, index) => {
        if(index > a && index < b){
            return true
        }else{
            return false
        }
    })
    
    console.log(prova)
}
myFunction(array,1,4)


//versione corta senza if/else

//mi crea un array che mi prende le posizioni comprese tra "a" e "b"
// let array2 = array.filter((element, index) => index > a && index < b)
// console.log(array2)