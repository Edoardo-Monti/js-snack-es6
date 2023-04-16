/*

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

const squadre = [
    {
        name: 'Milan',
        puntiFatti: '0',
        falliSubiti: '0'
    },
    {
        name: 'Inter',
        puntiFatti: '0',
        falliSubiti: '0'
    },
    {
        name: 'Juve',
        puntiFatti: '0',
        falliSubiti: '0'
    },
    {
        name: 'Roma',
        puntiFatti: '0',
        falliSubiti: '0'
    },
    {
        name: 'Lazio',
        puntiFatti: '0',
        falliSubiti: '0'
    },
]

//funzione che genera un numero random
function Random() {
    let randomNumber = Math.floor(Math.random()*50)+1;
    return randomNumber
}

//ciclo che mi prende ogni elemnto dell'array
squadre.forEach(element => {
    
    //sovrascrivo il valore delle chiavi con la funzione custom
    element.falliSubiti = Random()
    element.puntiFatti = Random()
    // console.log(element)

    const {puntiFatti, name, falliSubiti} = element
    delete element.puntiFatti
    console.log(element)
    
})

// //con map creo un altro array 
// const array2 = squadre.map (element => {
//     const {puntiFatti, name, falliSubiti} = element
//     console.log(element)
//     delete puntiFatti

// })



// document.querySelector("body").innerHTML += `<div>${array2}</div>`

