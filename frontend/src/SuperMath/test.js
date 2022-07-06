const SuperMath = require(".")
const ask = require("readline")
const { rawListeners } = require("process")

const interface = ask.createInterface({
    input: process.stdin,
    output: process.stdout
})

const subclass = 'volume'
//************* */
//*****BODY**** */
//************* */


const populateParams = async () => {
    const func = SuperMath[subclass]
    const params = (func.toString().substring(1).substring(0, func.toString().indexOf(")") - 1).split(", ").map(h => { 
        h.split(" ")[0]
        let str = ''
        for(let i = 0; i < h.length; i++) {
            if(h[i].toLowerCase() === h[i]) { str += h[i] } else {
                str += ` ${h[i].toLocaleLowerCase()}`
            }
        }
        return str.split(" =")[0]
    }))
    const arrayOfParams = []

    let i =0
    const ask = () => new Promise((resolve) => {
        interface.question(`${params[i]}: `, (ans) => {
            arrayOfParams[i] = ans
            resolve(ans)
        })
    })
    for(i = 0; i < params.length; i ++) {
        await ask()
    }
    
    console.log(SuperMath[subclass](...arrayOfParams))
    interface.close()
}

// console.log(SuperMath.perimeterARR([]))
console.log(SuperMath.greatesCommonFactor([12,3,9]))
// populateParams()
// console.log(params)
// console.log(SuperMath.quadraticEquation(1, 4, 5))
// console.log(SuperMath.volume(5, 10, 1, 9))