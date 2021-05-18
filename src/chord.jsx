import React, { useState, useEffect } from 'react';
import './chord.css'

const Chord = (props) => {

    const [chordArr, setChordArr] = useState(Array(5).fill(0).map(x => Array(5).fill(0)));

    useEffect(() => {
        var tempArray; 
        tempArray = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
        props.chordShape.notes.forEach((value, index) => {
            if (value != 0) {
                tempArray[value-1][index] = 1; 
            }
        });
        setChordArr(tempArray);
    }, [props.chordShape])

    const capo = []

    for(var x=0;x<6;x++) {
        if(x===5){
            capo.push(<td className="capo-container"><span className="last-capo">{props.chordShape.capo}</span></td>)
        } else {
            capo.push(<td className="capo-container"><span className="capo"></span></td>)
        }
        
    }

    console.log(chordArr);
    return <>
        <table>
            <tbody>
                {props.chordShape.capo !== null &&
                    <tr>
                        {capo}
                    </tr>
                }
                {chordArr.map((line, i) => {
                    return <tr>
                        {line.map((block, j) => {
                            if(chordArr[i][j] == 1){
                                return <td><span className="dot"></span></td>
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