import React, { useState, useEffect } from 'react';
import './chord.css'

const Chord = (props) => {

    const [chordArr, setChordArr]       = useState(Array(5).fill(0).map(x => Array(6).fill(0)));
    const [firstFret, setFirstFret]     = useState(1)
    const [positions, setPositions]     = useState([...props.chordShape.notes])

    useEffect(() => {
        debugger;
        var tempArray; 
        tempArray = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        var min = 15;
        var positionsArray = positions;
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
        setPositions(positionsArray);
    }, [props.chordShape, positions])

    const bar = []

    for(var x=0;x<6;x++) {
        if(x===5){
            bar.push(<td className="bar-container"><span className="last-bar">{props.chordShape.bar}</span></td>)
        } else {
            bar.push(<td className="bar-container"><span className="bar"></span></td>)
        }
        
    }

    // const emptyBlock = <td><div className="hover-container" row={i} column={j}><span className="dot-ghost"></span></div></td>;
    const dotBlock = (i,j) => {
        return <td><div className="hover-container" row={i} column={j} onClick={(event) => pressString(event)}><span className="dot"></span></div></td>
    }
    // const firstFretBlock = <td><div className="hover-container"></div></td>;
    const emptyBlock = (i,j) => {
        return <td><div className="hover-container" row={i} column={j} onClick={(event) => pressString(event)}><span className="dot-ghost"></span></div></td>;
    }
    const pressString = (event) => {
        event.stopPropagation();
        let row = parseInt(event.target.getAttribute("row"))
        let column = parseInt(event.target.getAttribute("column"))

        console.log(event.target.getAttribute("row")+ ", " + event.target.getAttribute("column"));
        let notesArray = [...positions]
        notesArray[column] = row+1
        setPositions(notesArray);
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