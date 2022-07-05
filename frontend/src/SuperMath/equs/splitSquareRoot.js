
function splitSquareRoot(number) {
    let j = 1
    let perfectCubes = [4,9]
    let cubeFound = null
    if((number / 4) % 1 === 0) cubeFound = { outSqr: Math.sqrt(perfectCubes[0]), inSqr: (number / perfectCubes[0]) }
    while (number > j && perfectCubes[1] < number   ) {
        if(Math.round(Math.sqrt(number / j)) === Math.sqrt(number / j)) return { outSqr: Math.sqrt(number / j), inSqr: j }
        j++

        let nd = perfectCubes[1]
        perfectCubes[1] = ((perfectCubes[1] - perfectCubes[0]) + 2) + perfectCubes[1]
        perfectCubes[0] = nd
        if((number / perfectCubes[1]) % 1 === 0) cubeFound = { outSqr: Math.sqrt(perfectCubes[1]), inSqr: (number / perfectCubes[1]) }
    }
    return cubeFound
}

module.exports = splitSquareRoot