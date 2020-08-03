import React from 'react';
import {Link} from "react-router-dom";

function EndButtonGroup(props) {

    return (
        <div>
            <button className="btn btn-light btn-lg btn-block" onClick={props.reset}> Play again</button>
            <Link to={'/'}> Go To Home </Link>
        </div>
    )
}

export default EndButtonGroup;