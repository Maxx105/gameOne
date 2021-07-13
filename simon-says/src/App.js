import './App.css';
import Simon from "./components/Simon/index";

function App() {
  document.body.style = 'background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,230,233,0.5665616588432247) 100%); -moz-transform: scale(1.3); zoom:110%;';
  return (
    <div >
      <h1 id="simon">SIMON</h1> 
      <div className = "center">
        <Simon></Simon>
      </div>
    </div>
  );
}

export default App;
