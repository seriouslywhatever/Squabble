import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Timer from "../Timer";
import Board from "../Board";
import Guess from "../Guess";
import * as firebase from "firebase";

class Game extends React.Component {


    state = {
        total: 0,
        guessedRight: [],
        question: "",
        questionId: "1", //todo: change this to fetch random question
        ans: [],
        asked: [], //array of already asked questions for no dubs
        inTime: true //todo create a switch for this
    };

    componentDidMount() {
        //todo fetch first random question here ~
        const db = firebase.database().ref();

        //this.setState({}); push current this.state.questionId to array asked[] might move away from componentDidMount
        const dbRefQ = db.child("questions").child("0").child(`question_${this.state.questionId}`).child("question");
        const dbRefA = db.child("answers").child("0").child(`answer_${this.state.questionId}`);

        dbRefA.on('value', snap => {
            this.setState({
                ans: snap.val(),
                total: snap.val().length
            });
        });

        dbRefQ.on('value', snap => {
            this.setState(
                {
                    question: snap.val()
                });
        });
    }

    questionPrompt = () => {
        return {
            backgroundColor: 'aliceblue',
            borderRadius: 10,
            padding: 5,
            marginTop: 20
        }
    };

    guess = (guess) => {
        this.state.ans.map((value, index, array) => {
            if (guess === value.answer) {
                let noDup = true;
                this.state.guessedRight.map((item) => {
                    if (item === guess) {
                        noDup = false;
                    }
                    return noDup;
                });

                if (noDup) {
                    this.setState({guessedRight: [...this.state.guessedRight, guess]});

                    const db = firebase.database().ref();
                    // eslint-disable-next-line no-unused-vars
                    const answerRef = db.child("answers").child("0").child(`answer_${this.state.questionId}`).child(`${index}`).update({guessed: true});

                    const newItems = [...this.state.ans];
                    newItems[index].guessed = true;
                    this.setState({ans: newItems});

                    if (this.state.guessedRight.length === this.state.total && this.state.inTime === true) {
                        console.log("good job!")
                    }
                }
            }
        });
    };

    boom = () => {
        this.setState({inTime: false});
    };

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Timer/>
                    <div style={this.questionPrompt()}>
                        <h1>{this.state.question}</h1>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="flex-row">
                        <div className="flex-column d-flex flex-wrap" style={boardStyle}>
                            <Board inTime={this.state.inTime} ans={this.state.ans}/>
                        </div>
                        <Guess guess={this.guess}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const boardStyle = {
    backgroundColor: 'black',
    border: '10px solid #002080',
    borderRadius: '20px 20px 0px 0px',
    height: '450px',
    paddingTop: "2%"
};

export default Game;