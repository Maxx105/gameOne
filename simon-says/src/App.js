import './App.css';
import Simon from "./components/Simon/index";

function App() {
  return (
    <div>
      <h1 id="simon">SIMON</h1> 
      <div className = "center">
        <Simon></Simon>
      </div>
    </div>
  );
}

export default App;
