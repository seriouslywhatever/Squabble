import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Timer from "../Timer";

class Game extends React.Component {

    state = {
        timeCurrent: 1,
        times: 0
    };

    questionPrompt = () => {
        return {
            backgroundColor: 'aliceblue',
            borderRadius: 10,
            padding: 5,
            marginTop: 20
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Timer/>
                    <div style={this.questionPrompt()}>
                        <h1>{this.props.question}</h1>
                    </div>
                </div>
                <div className="container">
                </div>
            </React.Fragment>
        );
    }


}

export default Game;