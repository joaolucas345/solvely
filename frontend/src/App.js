import FormulaComponent from "./components/FormulaComponent";
import './App.css'


function App() {
  return (
    <div className="App" >
      <header style={{ background: "black", height: "15vh", width: "100vw", position: "fixed", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "white" }}>SOLVELY</h1>
      </header>
      <div style={{ display: "grid", gridAutoRows: "40vh", gridTemplateColumns: "30vw 30vw 30vw", columnGap: "2vh", marginTop: "15vh"}}>
        <FormulaComponent page="quadraticequation" title="Quadratic Equation" class="quadratic-equation"></FormulaComponent>
        <FormulaComponent page="vertexformula" title="Vertex Formula" class="vertex-formula"></FormulaComponent>
      </div>
      <div style={{ width: "10vw", height: "5vh", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", background: "white", position: "fixed", top: "0", left: "1vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{width: "1vw", aspectRatio: "1", background: "black", borderRadius: "50%"}}></div>
        <input checked={localStorage.getItem("darkmode") == "true" ? true : false} onChange={(e) => {
          localStorage.setItem("darkmode", localStorage.getItem("darkmode") == "true" ? "false" : "true")
          window.location.reload()
      }} style={{cursor: "pointer"}} type={"checkbox"}/>
        <p style={{margin: 0}}>dark mode</p>
      </div>
      <div style={{height: "100vh", width: "100vw", pointerEvents: "none", background: "transparent", position: "fixed", top: 0, left: 0, backdropFilter: localStorage.getItem("darkmode") == "true" ? "invert(100%)" : "none"}}></div>
    </div>
  );
}

export default App;
