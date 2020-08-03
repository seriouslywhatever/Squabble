import React from 'react';

class Guess extends React.Component {

    state = {
        guess: ''
    };

    onChange = (e) => {
        this.setState({guess: e.target.value});
    };

    answerStyle = () => {
        return {
            backgroundColor: this.props.isRight ? "#ffffff" : "#ff726f"
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.guess(this.state.guess);
        this.setState({guess: ''})
    };

    render() {
        return (
            <div style={guessListStyle}>
                <form className="d-flex flex-column" onSubmit={this.onSubmit}>
                    <input
                        style={this.answerStyle()}
                        type="text"
                        name="guessed"
                        placeholder="take a guess..."
                        value={this.state.guess}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

const guessListStyle = {
    backgroundColor: 'black',
    border: '10px solid #002080',
};

export default Guess;