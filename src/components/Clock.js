import React from 'react';

class Clock extends React.Component {

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div style={timerStyle}>
                    <h1>
                        {this.props.time}
                    </h1>
                </div>
            </div>
        );
    }
}

const timerStyle = {
    // padding: 10,
    // backgroundColor: 'aliceblue',
    // border: '10px solid black',
    // width: '15%'
};

export default Clock;