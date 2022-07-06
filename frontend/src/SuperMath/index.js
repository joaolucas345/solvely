const quadraticEquation = require("./equs/quadraticEquation")
const roundHundreth = require("./equs/roundHundreth")
const splitSquareRoot = require("./equs/splitSquareRoot")
const vertexFormula = require("./equs/vertexFormula")
const volumeRegShapes = require('./equs/volumeRegShapes')
const areaRegShapes = require('./equs/areaRegShapes')
const volumePyramid = require('./equs/volumePyramid')
const volumeSphere = require('./equs/volumeSphere')
const perimeter = require('./equs/perimeter')
const circumference = require('./equs/circumference')
const circleArea = require('./equs/circleArea')
const volumeCylinder = require('./equs/cylinderVolume')
const greatesCommonFactor = require('./equs/greatestCommonFactor')
const pythagoreanTheorem = require('./equs/pythagoreanTheorem')

const SuperMath = {
    quadraticEquation,
    roundHundreth,
    splitSquareRoot,
    vertexFormula,
    volumeRegularShapes: volumeRegShapes, 
    areaRegularShapes: areaRegShapes,
    volumePyramid,
    volumeSphere,
    perimeter,
    circumference,
    circleArea,
    volumeCylinder,
    greatesCommonFactor,
    pythagoreanTheorem
}

module.exports = SuperMath