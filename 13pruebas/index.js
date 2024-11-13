// function f1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(1)
//             resolve()
//         }, 0);
//     })
// }


// function f2() {
//     console.log(2)
// }


// (async () => {
//     await f1()
//     f2()
// })();



// function f1(callback) {
//     setTimeout(()=>{
//         console.log(1)
//         callback()
//     })
// }

// function f2() {
//     console.log(2)
// }

// f1(f2);



// function f1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(1)
//             resolve()
//         },0)
//     })
// }

// function f2() {
//     console.log(2)
// }

// f1().then(f2)
