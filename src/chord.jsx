import React, { useState, useEffect } from 'react';
import './chord.css'

const Chord = (props) => {

    const [chordArr, setChordArr] = useState(Array(5).fill(0).map(x => Array(5).fill(0)));
    const [chordShape, setChordShape] = useState({
        notes: [0, 2, 2, 0, 0, 0],
        capo: null
    })

    useEffect(() => {
        setChordArr([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
        props.chordShape.notes.forEach((value, index) => {
            if (value!=0) {
                chordArr[value-1][index] = 1; 
            }
        })
        console.log(chordArr);
    }, [props.chordShape])

    console.log(chordArr);
    return <>
        <table>
            <tbody>
                {chordArr.map((line, i) => {
                    return <tr>
                        {line.map((block, j) => {
                            if(chordShape.notes[i] !== 0 && chordShape.notes[j] === i+1){
                                return <td><span className="dot" /></td>
                            } 
                            return <td></td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    </>
}

export default Chord