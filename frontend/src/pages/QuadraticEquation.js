import React, { useEffect, useRef, useState } from 'react'
import SuperMath from '../SuperMath'
import SolveButton from '../components/SolveButton'

export default function QuadraticEquation() {

    const [result1, setResult1] = useState("")
    const [result2, setResult2] = useState("")
    const [result3, setResult3] = useState("")
    const [result4, setResult4] = useState("")

    const aInput = useRef()
    const bInput = useRef()
    const cInput = useRef()
    const textEl = useRef()

    useEffect(() => {
      console.log(result3, "result 3")
    }, [result3])

  return (
    <div styl={{height: "100vh", width: "100vw"}}>
      <header style={{ background: "black", height: "15vh", width: "100vw", position: "fixed", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "white" }}>QUADRATIC EQUATION</h1>
        <div style={{ width: "10vw", height: "5vh", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", background: "white", position: "fixed", top: "0", left: "1vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{width: "1vw", aspectRatio: "1", background: "black", borderRadius: "50%"}}></div>
        <input checked={localStorage.getItem("darkmode") == "true" ? true : false} onChange={(e) => {
          localStorage.setItem("darkmode", localStorage.getItem("darkmode") == "true" ? "false" : "true")
          window.location.reload()
      }} style={{cursor: "pointer"}} type={"checkbox"}/>
        <p style={{margin: 0}}>dark mode</p>
      </div>
      </header>
      <div style={{maxHeight: "8vh", display: "grid", justifyContent: "center", alignItems: "center", flexDirection: "column",  marginTop: "15vh"}}>
        <div  style={{display: "flex", justifyContent: "center", margin: 0, alignItems: "center"}}>
          <h2>A = </h2>
          <input ref={aInput} placeholder='type here' type="number"></input>
        </div>
        <div  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h2>B = </h2>
          <input ref={bInput} placeholder='type here' type="number"></input>
        </div>        
        <div  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h2>C = </h2>
          <input ref={cInput} placeholder='type here' type="number"></input>
        </div>
        <div  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <SolveButton onClick={() => {
              setResult3("")
                const a = parseFloat(aInput.current.value)
                const b = parseFloat(bInput.current.value)
                const c = parseFloat(cInput.current.value)
                if(isNaN(a) || isNaN(b) || isNaN(c) ) { alert("Fill out all variables") } else {
                    const rs = SuperMath.quadraticEquation(a, b, c)
                    if(isNaN(parseInt(rs.xPlus))) return setResult1("This is not a quadratic equation")
                    setResult1(`This quadratic equation has ${rs.descripDelta.toLowerCase()}`)
                    setResult2(`x = ${isNaN(rs.xPlus) ? rs.xPlus?.indexOf(" | ") > 0 ? rs.xPlus.split(" | ")[0]  : rs.xPlus : rs.xPlus} and x = ${isNaN(rs.xMinus) ? rs.xMinus?.indexOf(" | ") > 0 ? (() => { 
                        setResult3(`x = ${rs.xPlus.split(" | ")[1].split("/")[0]} and x = ${rs.xMinus.split(" | ")[1].split("/")[0]}`)
                        return rs.xMinus.split(" | ")[0] })() : rs.xMinus : rs.xMinus}`)
                    if(rs.xPlus?.indexOf(" | ") > 0) setResult4(rs.xPlus.split(" | ")[1].split("/")[1])
                }
            }} />
        </div>
      <p ref={textEl} style={{display: "flex", justifyContent:"center", margin: 0, marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result1}</p>
      <p style={{display: "flex", justifyContent:"center", margin: 0, marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result2}</p>
      <div style={{display:"flex", justifyContent: "center"}}>
        <p style={{display: "flex", justifyContent:"center", margin: 0,  marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result3 ? "x = " : ""}</p>
        <div>
        <p style={{display: "flex", justifyContent:"center", margin: 0, textDecorationLine: "underline", marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result3?.split("=")[1]?.split(" and ")[0]}</p>
        <p style={{display: "flex", justifyContent:"center", margin: 0, marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result3 ? result4 : ""}</p>
        </div>
      <p style={{display: "flex", justifyContent:"center", margin: 0, marginRight: "1vw", marginLeft: "1vw" , marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result3 ? "and" : ""}</p>
      <p style={{display: "flex", justifyContent:"center", margin: 0,  marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result3 ? "x = " : ""}</p>
        <div>
        <p style={{display: "flex", justifyContent:"center", margin: 0, textDecorationLine: "underline", marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result3?.split("=")[2]}</p>
        <p style={{display: "flex", justifyContent:"center", margin: 0, marginTop: "5px", fontSize: "25px", fontWeight: "bold"}}>{result3 ? result4 : ""}</p>
        </div>
      </div>
      </div>
      <div style={{height: "100vh", width: "100vw", pointerEvents: "none", background: "transparent", position: "fixed", top: 0, left: 0, backdropFilter: localStorage.getItem("darkmode") == "true" ? "invert(100%)" : "none"}}></div>

    </div>
  )
}
