const roundHundreth = require("./roundHundreth")
const splitSquareRoot = require("./splitSquareRoot")

const simplifyVariables = (a,b,c) => {
    for(let i = 2; i < 11; i++) {
        if(a % i == 0 && b % i == 0 && c % i == 0) {
            a /= i
            b /= i
            c /= i
            i = 2
        }
    }

    let lowest = a
    if(lowest > b) lowest = b
    if(lowest > c) lowest = c
    if(lowest > 1 && a % lowest == 0 && b % lowest == 0 && c % lowest == 0) {
        a /= lowest
        b /= lowest
        c /= lowest
    }

    return { a, b, c }
}

const quadraticEquation = (a = 0, b = 0, c = 0) => {
    let delta = Math.pow(b, 2) - (4 * a * c)
    const descripDelta = delta > 0 ? "2 real different solutions" : delta === 0 ? "2 real equal solutions" : "no real solution"
    let xPlus, xMinus
    if(descripDelta !== "no real solution") {
        xPlus =  roundHundreth(((b * -1) + Math.sqrt(delta)) / (2 * a))
        xMinus =  roundHundreth(((b * -1) - Math.sqrt(delta)) / (2 * a))

    } else {
        delta *= -1
        let isSimplifiable = true
        let inSqr = 0
        let xPlus1 =  `${roundHundreth((b * -1) / 2 * a) == 0 ? "" : roundHundreth((b * -1) / 2 * a)}+${(Math.sqrt(delta) / 2 * a) === 1 ? "" : roundHundreth(Math.sqrt(delta) / 2)}i`
        let d1 = b * -1, d2 = splitSquareRoot(delta), d3 = 2 * a
        if(d2 === null) {
            d2 = 0
            isSimplifiable = false
        } else {
            inSqr = d2.inSqr
            d2 = d2.outSqr
        }
        let r = simplifyVariables(d1, d2, d3)
        let xPlus2 =  `${r.a} + ${isSimplifiable ? r.b == "1" || r.b == "0" ? "" : r.b : ""}√${isSimplifiable ? inSqr : delta}i / ${r.c}`
        xPlus = `${xPlus1} | ${xPlus2}`
        let xMinus1 =  `${roundHundreth((b * -1) / 2 * a) == 0 ? "" : roundHundreth((b * -1) / 2 * a)}-${(Math.sqrt(delta) / 2 * a) === 1 ? "" : roundHundreth(Math.sqrt(delta) / 2)}i`
        let xMinus2 =  `${r.a} - ${isSimplifiable ? r.b == "1" || r.b == "0" ? "" : r.b : ""}√${isSimplifiable ? inSqr : delta}i / ${r.c}`
        xMinus = `${xMinus1} | ${xMinus2}`
    }







    return {
        xPlus,
        xMinus,
        delta,
        descripDelta
    }
}

module.exports = quadraticEquation