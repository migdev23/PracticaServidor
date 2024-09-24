 const arr = [1,4342,2,3,24235,5,1,11113312]
// arr.sort((a,b) => a - b);
// console.log(arr)


//Curiosidades de js
// const mapa = new Map();
// mapa.set('nombre','Node.js')
// mapa.set('tipo','Runtime')
// for (const element of mapa) {
//     console.log(element[0], element[1])
// }

// const iterable = 'Hola'
// const arrDelt = Array.from(iterable)
// console.log((iterable == arrDelt))


function* ge () {
   try {
    yield 1;
    yield 2;
    yield 3;
   } catch (error) {
    console.log('ERR')
   }
    yield 4;
}

const it = ge();


console.log(it.next().value)
console.log(it.throw(new Error('Err')).value)
console.log(it.next().value)


const array = [1,2,3,4,5];

const arrl = array.entries()

console.log(arrl.next())

console.log(arrl.next())

for (const element of arrl) {
    console.log(element)
}



