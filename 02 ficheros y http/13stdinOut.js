const readline = require("readline");

// process.stdin.on("data", (data) =>{
//     process.stdout.write(`${data.toString().toUpperCase()}`)
// })

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// console.log("1-Opcion 1")
// console.log("2-Opcion 2")
// console.log("3-Opcion 3")

// rl.question("Cual es tu opcion elegida?", (answer) =>{
//     rl.write(`${answer}`)
//     rl.close()
// })

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const ask = (question) => {
    rl.question(question, (answer) =>{
        if (answer == "q") {
            process.exit(1)
        }
        rl.write(`${answer} \n`)
        ask(question)
    })
}

ask('Elige opcion: ')