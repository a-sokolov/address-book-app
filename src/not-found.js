import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return(
            <div>
                <h3>404 page does not exists!</h3>
                <Link to="/">Go home</Link>
            </div>
        )
    }
}