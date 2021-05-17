import logo from './logo.svg';
import './App.css';
import Chord from './chord.jsx'

function App() {
  var x;
  x = {
    notes: [4,0,0,0,0,0],
    capo: null
  }
  return (
    <div className="App">
      <div className="container">
        <Chord chordShape={x} />
      </div>
    </div>
  );
}

export default App;
