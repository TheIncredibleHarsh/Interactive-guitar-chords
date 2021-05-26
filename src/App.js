import { useState } from 'react';
import './App.css';
import Chord from './chord.jsx';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';

function App() {
  var x;
  x = {
    notes: [0, 0, 0, 0, 0, 0]
  }

  const [chordShape, setChordShape] = useState(x);
  const [currentChord, setCurrentChord] = useState("");

  const chordsData = [
    { "key": "A",         "value": "0,0,2,2,2,0", "text": "A"         },
    { "key": "Am6",       "value": "0,0,2,2,1,2", "text": "Am6"       },
    { "key": "Am7",       "value": "0,0,2,2,1,3", "text": "Am7"       },
    { "key": "Asus",      "value": "0,0,2,2,3,0", "text": "Asus"      },
    { "key": "Am",        "value": "0,0,2,2,1,0", "text": "Am"        },
    { "key": "A7",        "value": "0,0,2,0,2,0", "text": "A7"        },
    { "key": "B",         "value": "0,2,4,4,4,2", "text": "B"         },
    { "key": "C",         "value": "0,3,2,0,1,0", "text": "C"         },
    { "key": "Csus",      "value": "0,0,3,0,1,3", "text": "Csus"      },
    { "key": "C6",        "value": "0,0,2,2,1,3", "text": "C6"        },
    { "key": "C7",        "value": "0,3,2,3,1,0", "text": "C7"        },
    { "key": "Cmaj7",     "value": "0,3,2,0,0,0", "text": "Cmaj7"     },
    { "key": "D",         "value": "0,0,0,2,3,2", "text": "D"         },
    { "key": "Dm",        "value": "0,0,0,2,3,1", "text": "Dm"        },
    { "key": "D7",        "value": "0,0,0,2,1,2", "text": "D7"        },
    { "key": "Dsus",      "value": "0,0,0,2,3,3", "text": "Dsus"      },
    { "key": "E",         "value": "0,2,2,1,0,0", "text": "E"         },
    { "key": "Em",        "value": "0,2,2,0,0,0", "text": "Em"        },
    { "key": "Em7",       "value": "0,2,0,0,0,0", "text": "Em7"       },
    { "key": "Emaj7",     "value": "0,2,1,1,0,0", "text": "Emaj7"     },
    { "key": "E7",        "value": "0,2,0,1,0,0", "text": "E7"        },
    { "key": "F",         "value": "0,3,3,2,1,1", "text": "F"         },
    { "key": "Fmaj7",     "value": "0,0,3,2,1,0", "text": "Fmaj7"     },
    { "key": "G",         "value": "3,2,0,0,0,3", "text": "G"         },
    { "key": "Gsus",      "value": "0,0,0,0,1,3", "text": "Gsus"      },
    { "key": "Em7add11",  "value": "0,0,0,0,0,0", "text": "Em7add11"  }
    
  ]

  const chords = {}
  chordsData.forEach((chord) => {
    chords[chord["value"]] = chord["key"];
  })

  const changeChord = (event, data) => {
    var arr = data["value"].split(',').map((x) => {
      return parseInt(x)
    });
    setChordShape({ notes: arr });
  }

  const handleChordChange = (x) => {
    if (chords[x.notes.toString()]) {
      setCurrentChord(chords[x.notes.toString()]);
    } else {
      setCurrentChord("Not a chord");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="chord-container">
          <Chord chordShape={chordShape} handleChordChange={handleChordChange} />
        </div>
        <div className="info-container">
          <div className="curr-chord-container">
            <span className="curr-chord">{currentChord}</span>
          </div>
          <div className="chord-dropdown">
            <Dropdown
              id="dropdown"
              placeholder="Pick chord"
              fluid
              search
              selection
              onChange={(event, data) => { changeChord(event, data) }}
              options={chordsData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
