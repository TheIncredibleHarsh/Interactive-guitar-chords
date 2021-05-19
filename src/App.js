import logo from './logo.svg';
import './App.css';
import Chord from './chord.jsx'

function App() {
  var x;
  x = {
    notes: [0,0,5,7,8,7],
    bar: null
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
