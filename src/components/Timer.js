import React from 'react';
import Clock from "./Clock";

class Timer extends React.Component {

    state = {
        time: 60,
    };

    /**
     * to stop the timer preemptively
     *
     * make the method/condition that changes this.state.time stop leaving current time
     * todo: delete this after play again has concluded
     */
    stopTimer = () => {
        clearInterval(this.interval);
    };

    /**
     * what happens when to clock when timer reaches zero
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
        if(this.state.time - 1 === 0){
            this.props.boom();
        }
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