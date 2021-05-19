import React, { useState, useEffect } from 'react';
import './chord.css'

const Chord = (props) => {

    const [chordArr, setChordArr]       = useState(Array(5).fill(0).map(x => Array(6).fill(0)));
    const [firstFret, setFirstFret]     = useState(1)

    useEffect(() => {
        var tempArray; 
        tempArray = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        var min = 15;
        var positionsArray = [...props.chordShape.notes];
        positionsArray.forEach((value) => {
            if(value<min && value !== 0){
                min = value
            }
        });

        if(min != 15 && min >= 4){
            props.chordShape.notes.forEach((value, index) => {
                if(value !== 0){
                    positionsArray[index] = value - min + 1;
                }
            });
            setFirstFret(min);
        }

        positionsArray.forEach((value, index) => {
            if (value !== 0) {
                tempArray[value-1][index] = 1; 
            }
        });
        setChordArr(tempArray);
    }, [props.chordShape])

    const bar = []

    for(var x=0;x<6;x++) {
        if(x===5){
            bar.push(<td className="bar-container"><span className="last-bar">{props.chordShape.bar}</span></td>)
        } else {
            bar.push(<td className="bar-container"><span className="bar"></span></td>)
        }
        
    }

    return <>
        <table>
            <tbody>
                {props.chordShape.bar !== null &&
                    <tr>
                        {bar}
                    </tr>
                }
                {chordArr.map((line, i) => {
                    if(props.chordShape.bar !== null && i===4){
                        return <tr></tr>
                    }
                    return <tr>
                        {line.map((block, j) => {
                            if(chordArr[i][j] === 1){
                                return <td><span className="dot"></span></td>
                            }
                            if(firstFret > 1 && j===5 && i===0){
                                return <td><span className="first-fret">{"fret " + firstFret}</span></td>
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