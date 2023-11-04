import "./App.css";
// import lawyerHands from "./assets/Its-Always-Sunny-its-always-sunny-in-philadelphia-16087009-1600-900.jpeg";
import newHands from "./assets/newHands.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jack Kelly's site for very professional Lawyers</h1>
        <img src={newHands} className="professionalNewHands" alt="newHands" />
        <p> Two very fine lawyers successful case</p>
      </header>
    </div>
  );
}

export default App;
