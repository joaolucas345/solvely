const quadraticEquation = require("./equs/quadraticEquation")
const roundHundreth = require("./equs/roundHundreth")
const splitSquareRoot = require("./equs/splitSquareRoot")
const vertexFormula = require("./equs/vertexFormula")
const volumeRegShapes = require('./equs/volumeRegShapes')
const areaRegShapes = require('./equs/areaRegShapes')
const volumePyramid = require('./equs/volumePyramid')
const volumeSphere = require('./equs/volumeSphere')

const SuperMath = {
    quadraticEquation,
    roundHundreth,
    splitSquareRoot,
    vertexFormula,
    volumeRegularShapes: volumeRegShapes, 
    areaRegularShapes: areaRegShapes,
    volumePyramid,
    volumeSphere
}

module.exports = SuperMath