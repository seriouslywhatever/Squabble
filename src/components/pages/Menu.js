import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

class Menu extends React.Component {

    render() {
        return (
            <div className="Menu container">
                <Link to={'/Solo'} className="RouterLink btn btn-light btn-lg btn-block"> Play </Link>
                <Link to={"/Online"} className="RouterLink btn btn-light btn-lg btn-block disabled"> Online </Link>
                <Link to={"/Help"} className="RouterLink btn btn-light btn-lg btn-block disabled"> Help </Link>
            </div>
        );
    }
}

export default Menu;