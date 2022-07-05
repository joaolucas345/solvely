const quadraticEquation = require("./quadraticEquation")
const roundHundreth = require("./roundHundreth")

const vertexFormula = (a = 0, b = 0, c = 0) => {
    const Xv = roundHundreth((b * -1) / (2 * a))
    const Yv = roundHundreth((a * (Math.pow(Xv, 2))) + (b * Xv) + (c))
    const xI = quadraticEquation(a,b,c)

    const obj = { 
        vertex: [Xv,Yv],
        'min/max': a > 0 ? "min" : "max",
        yIntercept: c,
        xIntercept: [xI.xPlus, xI.xMinus]
    }

    // console.log(obj) //DEBUG
    return obj
}

module.exports = vertexFormula