const cofet = (side1, side2, side3) => {
    let isTriangle = true
    if(side1 + side2 < side3) isTriangle = false
    if(side1 + side3 < side2) isTriangle = false
    if(side2 + side3 < side1) isTriangle = false
    return isTriangle ? 'It is a triangle' : 'It is not a triangle'
}

module.exports = cofet