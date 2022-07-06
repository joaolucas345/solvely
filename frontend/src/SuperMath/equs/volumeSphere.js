const sphereVolume = (radius = 0) => {
    return ((Math.PI * Math.pow(radius, 3)) * 4) / 3
}

module.exports = sphereVolume