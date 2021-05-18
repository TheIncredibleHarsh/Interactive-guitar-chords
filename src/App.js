import logo from './logo.svg';
import './App.css';
import Chord from './chord.jsx'

function App() {
  var x;
  x = {
    notes: [0,0,3,2,1,1],
    capo: 3
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
