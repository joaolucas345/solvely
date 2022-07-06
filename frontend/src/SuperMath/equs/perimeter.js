const perimeterARR = (sidesARR = [0]) => {
    let total = 0
    sidesARR.forEach(sides => total += sides)
    return total
}

module.exports = perimeterARR