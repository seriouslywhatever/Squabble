import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Menu from "./components/pages/Menu";
import Game from "./components/pages/Game";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App container">
                    <Route exact path="/">
                        <header>
                            <h1>Squabble</h1>
                        </header>
                        <Menu/>
                    </Route>
                    <Route path="/solo">
                        <Game question={"question?"}/>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
