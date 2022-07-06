const volume = (radius = 0, height = 0) => {
    return Math.PI * Math.pow(radius, 2)  * height 
}

module.exports = volume