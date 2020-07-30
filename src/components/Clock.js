import React from 'react';

class Clock extends React.Component {

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div>
                    <h1>
                        {this.props.time}
                    </h1>
                </div>
            </div>
        );
    }
}

export default Clock;