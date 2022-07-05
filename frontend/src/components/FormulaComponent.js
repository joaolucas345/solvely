import React from 'react'

const width = "25vw"
const height = "20vh"
const borderRadius= "20px"

export default function FormulaComponent(children) {
  return (
    <div onClick={() => window.location = `${window.location.origin}/${children.page}`} style={{ height: "100%", cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div  style={{ minWidth: width, maxWidth: width, maxHeight: height, overflow: "hidden", minHeight: height,  border: "1px solid black" , background: "red",position: "relative", borderRadius: borderRadius }}>
            <div  className={children.class} style={{position: "absolute", minWidth:"100%", minHeight: "70%"}}>
            </div>
            <div style={{position: "absolute", minWidth:"100%", minHeight: "30%", background: "black", bottom: 0,  display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h2 style={{ color: "white", margin: 0 }}>{children.title}</h2>
            </div>
        </div>
    </div>
  )
}
