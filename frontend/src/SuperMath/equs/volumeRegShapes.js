const volume = (shapeNumberOfSides = 0, widthOfOneSide = 0, height = 0, length = 0) => {
    let numberOfTriangles = 0
    if(shapeNumberOfSides < 3) return "not enough number of sides"
    if(shapeNumberOfSides === 3) { numberOfTriangles = 1 }
    else if(shapeNumberOfSides === 4) { numberOfTriangles = 2 }
    else { numberOfTriangles = shapeNumberOfSides }

    const triangleArea = (widthOfOneSide * (length / 2)) / 2
    const totalArea = triangleArea * numberOfTriangles
    return totalArea * height
}

module.exports = volume