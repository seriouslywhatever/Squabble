import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Timer from "../Timer";
import Board from "../Board";
import Guess from "../Guess";
import * as firebase from "firebase";
import EndButtonGroup from "../EndButtonGroup";

class Game extends React.Component {

    state = {
        total: 0,
        totalQ: 360,
        guessedRight: [],
        question: "",
        questionId: "1",
        ans: [],
        inTime: true,
        end: false,
        isRight: true
    };

    componentDidMount() {
        const db = firebase.database().ref();
        let random = Math.floor((Math.random() * this.state.totalQ) + 1);
        let stringRandom = String(random);
        this.setState({questionId: stringRandom});
        const dbRefQ = db.child("questions").child("0").child(`question_${stringRandom}`).child("question");
        const dbRefA = db.child("answers").child("0").child(`answer_${stringRandom}`);

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

    componentWillUnmount() {
        this.refillDb();
    }

    questionPromptStyle = () => {
        return {
            backgroundColor: this.state.end ? 'lightgreen' : 'aliceblue',
            borderRadius: 10,
            padding: 5,
            marginTop: 20
        }
    };

    guess = (guess) => {
        let checker = false;
        this.state.ans.map((value, index, array) => {
            if (guess === value.answer) {
                checker = true;
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
                    if (this.state.guessedRight.length === this.state.total - 1 && this.state.inTime === true) {
                        this.setState({
                            end: true,
                        });
                    }
                }
            }
            return value;
        });
        if (checker) {
            this.setState({isRight: true});
        } else {
            this.setState({isRight: false});
        }
    };

    boom = () => {
        this.setState({inTime: false});
    };

    refillDb = () => {
        const db = firebase.database().ref();
        const dbRefA = db.child("answers").child("0").child(`answer_${this.state.questionId}`);
        let holder = [];
        dbRefA.on('value', snap => {
            holder = snap.val();
        });
        holder.map((ans) => {
            // eslint-disable-next-line no-unused-vars
            const dbRefA = db.child("answers").child("0").child(`answer_${this.state.questionId}`).child(`${ans.id - 1}`).update({
                    guessed: false
                }
            );
            return ans;
        });
    };

    restart = () => {
        this.refillDb();
        this.setState({
            inTime: true,
            end: false,
            guessedRight: [],
            isRight: true
        });
        this.componentDidMount();
    };

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Timer end={this.state.end} inTime={this.state.inTime} boom={this.boom}/>
                    <div style={this.questionPromptStyle()}>
                        <h1>{this.state.question}</h1>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="flex-row">
                        <div className="flex-column d-flex flex-wrap" style={boardStyle}>
                            <Board inTime={this.state.inTime} ans={this.state.ans}/>
                        </div>
                        {!this.state.inTime || this.state.end ? <EndButtonGroup reset={this.restart}/> :
                            <Guess guess={this.guess} isRight={this.state.isRight}/>}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const
    boardStyle = {
        backgroundColor: 'black',
        border: '10px solid #002080',
        borderRadius: '20px 20px 0px 0px',
        height: '450px',
        paddingTop: "2%"
    };

export default Game;