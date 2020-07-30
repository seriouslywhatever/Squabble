import React from 'react';
import ListItem from "./ListItem";

class Board extends React.Component {

    render() {
        return this.props.ans.map((ans) => (
            <ListItem inTime={this.props.inTime} ans={ans} key={ans.id}/>
        ));
    }
}

export default Board;