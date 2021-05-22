import {useState} from 'react';
import './App.css';
import Chord from './chord.jsx';

function App() {
  var x;
  x = {
    notes: [0,0,0,0,0,0]
  }

  const [currentChord, setCurrentChord] = useState("");

  const chords = {
    "0,0,2,2,2,0": "A" ,
    "0,0,2,2,1,0": "Am",
    "0,0,2,0,2,0": "A7",
    "0,3,2,0,1,0": "C" ,
    "0,3,2,3,1,0": "C7",
    "0,0,0,2,3,2": "D" ,
    "0,0,0,2,3,1": "Dm",
    "0,0,0,2,1,2": "D7", 
    "0,2,2,1,0,0": "E" ,
    "0,2,2,0,0,0": "Em",
    "0,2,0,1,0,0": "E7",
    "0,3,3,2,1,1": "F" ,
    "3,2,0,0,0,3": "G" 
  } 

  const handleChordChange = (x) => {
    console.log(x.notes.toString());
    if(chords[x.notes.toString()]){
      setCurrentChord(chords[x.notes.toString()]);
    } else {
      setCurrentChord("Not a chord");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Chord chordShape={x} handleChordChange={handleChordChange}/><span>{currentChord}</span>
      </div>
    </div>
  );
}

export default App;
