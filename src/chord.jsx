import React, { useState, useEffect } from 'react';
import './chord.css'

const Chord = (props) => {

    const [chordArr, setChordArr]       = useState(Array(5).fill(0).map(x => Array(6).fill(0)));
    // const [firstFret, setFirstFret]     = useState(1)
    const [positions, setPositions]     = useState([...props.chordShape.notes])

    useEffect(() => {
        var min = 15;
        var positionsArray = positions;
        // if(props.chordShape.startingFret) {
        //     setFirstFret(props.chordShape.startingFret);
        // }
        changeChordShape(positionsArray);
    }, [props.chordShape])

    const dotBlock = (i,j) => {
        return <td><div className="hover-container" row={i} column={j} onClick={(event) => pressString(event)}><span className="dot"></span></div></td>
    }
    const emptyBlock = (i,j) => {
        return <td><div className="hover-container" row={i} column={j} onClick={(event) => pressString(event)}><span className="dot-ghost"></span></div></td>;
    }
    const pressString = (event) => {
        event.stopPropagation();
        let row = parseInt(event.target.getAttribute("row"))
        let column = parseInt(event.target.getAttribute("column"))

        let notesArray = [...positions]
        if(notesArray[column] === row+1){
            notesArray[column] = 0
        } else {
            notesArray[column] = row+1
        }

        changeChordShape(notesArray);
    }

    const changeChordShape = (notesArray) => {
        var tempArray; 
        tempArray = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        notesArray.forEach((value, index) => {
            if (value !== 0) {
                tempArray[value-1][index] = 1; 
            }
        });
        setChordArr(tempArray);
        setPositions([...notesArray]);
        if(typeof props.handleChordChange === 'function') {
            props.handleChordChange({notes: notesArray});
        }
    }

    return <>
        <table>
            <tbody>
                {chordArr.map((line, i) => {
                    return <tr>
                        {line.map((block, j) => {
                            if(chordArr[i][j] === 1){
                                // return <td><span className="dot"></span>{emptyBlock}</td>
                                return dotBlock(i,j);
                            }
                            // if(firstFret > 1 && j===5 && i===0){
                            //     // return <td><span className="first-fret">{"fret " + firstFret}</span></td>
                            //     return emptyBlock;
                            // }
                            return emptyBlock(i,j)
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    </>
}

export default Chord