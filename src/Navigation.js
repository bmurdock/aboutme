import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {

    return (
        <nav>
            <ul className={`nav ${props.direction}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/camp">Boot Camp</Link>
                </li>
                <li>
                    <Link to="/other">Some Other Page</Link>
                </li>
                <li>
                    <Link to="/fixed">This should break...differently.</Link>
                </li>
            </ul>
        </nav>

    );

}


export default Navigation;