import React from 'react';
import Clock from "./Clock";

class Timer extends React.Component {

    state = {
        time: 120,
    };

    /**
     * what happens when to clock when timer reaches zero
     */

    boom = () => {
        return (
            <h1>X</h1>
        );
    };

    /**
     * counting down the timer
     */

    tick() {
        if (this.props.inTime) {
            if (this.state.time - 1 <= 0) {
                this.setState({time: 120});
                this.props.boom();
            } else {
                this.setState(state => ({
                        time: state.time - 1
                    })
                );
            }
        }
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
                        this.props.inTime ? <Clock time={this.state.time}/> : this.boom()
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