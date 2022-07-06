const pt = (side1, side2) => {
    const c2 = Math.pow(side1, 2) + Math.pow(side2, 2)
    return Math.sqrt(c2)
}

module.exports = pt