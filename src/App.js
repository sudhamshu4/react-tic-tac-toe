import "./App.css";
import Board from "./Tictactoegame/Board";

function App() {
  return (
    <div className="App bg-balls">
      <h1>
        <span className="text-orange">TIC</span> TAC{" "}
        <span className="text-green">TOE</span>
      </h1>
      <Board />
    </div>
  );
}

export default App;
