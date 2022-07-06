const gcf = (sidesARR = [0]) => {
    let lowest = sidesARR[1]
    for(let i = 1; i < sidesARR.length; i++) if(lowest > sidesARR[i]) lowest = sidesARR[i]
    
    let ind = 1
    let gfc = 'none'
    while(lowest >= ind) {
        let isFactor = true
        for(let i = 1; i < sidesARR.length; i++) if(sidesARR[i] % ind !== 0) isFactor = false
        if(isFactor) gfc = ind
        ind++
    }
    return gfc
}   

module.exports = gcf