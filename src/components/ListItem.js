import React from 'react';
import TurnOver from './TurnOver'

class ListItem extends React.Component {

    listItemStyle = () => {
        return {
            padding: "0px 25px",
            paddingTop: "15px",
            border: "5px solid black",
            fontSize: "25px",
            fontWeight: "bold",
            textTransform: "uppercase",
            backgroundColor: this.props.inTime  || (this.props.ans.guessed === true) ? "#002080" : "gray"
        }
    };

    render() {
        return (
            <div className="d-flex flex-row flex-wrap">
                <div className="d-flex flex-fill" style={this.listItemStyle()}>
                    <div className="flex-grow-1">
                       <TurnOver guessed={this.props.ans.guessed}
                                 title={this.props.ans.answer}
                                 placeHolder={this.props.ans.id}
                                 inTime={this.props.inTime}/>
                    </div>
                    <div>
                        <TurnOver guessed={this.props.ans.guessed}
                                  title={this.props.ans.points}
                                  placeHolder="-"
                                  inTime={this.props.inTime}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;