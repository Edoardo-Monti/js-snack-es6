/*

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

*/


const array = [
    {
      name: 'Bici 1',
      peso: '22',
    },
    {
      name: 'Bici 2',
      peso: '69'
    },
    {
      name: 'Bici 3',
      peso: '24'
    },
    {
      name: 'Bici 4',
      peso: '53'
    },
    {
      name: 'Bici 5',
      peso: '28'
    },
]

for(let i = 0; i < array.length; i++){
    
    //prendiamo ogni singolo elemnto dell' array
    let obj = array[i]

    //prendiamo ogni valore delle chiavi
    const{name, peso} = obj
    console.log(name)
    console.log(peso)
}


