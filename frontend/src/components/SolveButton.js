import React from 'react'

export default function SolveButton(children) {
  return (
    <button onClick={children.onClick} style={{ height: "5vh", margin: 0, width: "15vw", color: "white", background: "black", cursor: "pointer", border: "none", borderRadius: "20px", fontSize: "20px", fontFamily: "sans-serif"}}>Solve</button>
  )
}
