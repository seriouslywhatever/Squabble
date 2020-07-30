import React from 'react';

function TurnOver(props) {
    const guessed = props.guessed;
    const inTime = props.inTime;

    const itemStyle = {
        backgroundColor: "black",
        border: "1px dotted aliceblue",
        padding: "0px 5px",
        fontFamily: "Arial Black, serif",
        color: "aliceblue"
    };

    if (guessed || !inTime) {
        return <p style={itemStyle}>{props.title}</p>
    } else {
        return <p style={itemStyle}>{props.placeHolder}</p>
    }
}

export default TurnOver;