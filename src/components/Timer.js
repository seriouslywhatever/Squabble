import React from 'react';
import Clock from "./Clock";

class Timer extends React.Component {

    state = {
        time: 10,
        stop: false
    };

    /**
     * to stop the timer preemptively
     *
     * make the method/condition that changes this.state.time stop leaving current time
     */
    stopTimer = () => {
        clearInterval(this.interval);
    };

    /**
     * what happens when counter reaches zero
     *
     * - tell/show user has lost
     * - prompt to play again
     */

    boom = () => {
        clearInterval(this.interval);
        return (
            <h1>X</h1>
        );
    };

    /**
     * counting down the timer
     */

    tick() {
        this.setState(state => ({
                time: state.time - 1
            })
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div className="d-flex justify-content-center">
                <div style={timerStyle}>
                    {
                        this.state.time !== 0 ?
                            <Clock time={this.state.time}/> : this.boom()
                    }
                    {
                        this.state.stop ? <h1>change this with win screen</h1> :
                            <button onClick={this.stopTimer}>stop timer</button>
                    }
                </div>
            </div>
        );
    }
}

const timerStyle = {
    padding: 10,
    backgroundColor: 'aliceblue',
    border: '10px solid black',
    width: '15%'
};

export default Timer;