import React, { Component } from 'react';
import { Route, Link, NavLink, Redirect } from "react-router-dom";

const User = (params) => {
    return(<div>Fucking user {params.username}!!!</div>)
}

export default class AppRoot extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="AppRoot">
                <ul>
                    <li><NavLink exact to='/' activeStyle={{color: 'green'}}>Home</NavLink></li>
                    <li><NavLink exact to='/about' activeStyle={{color: 'green'}}>About</NavLink></li>
                </ul>

                <Route path='/' exact render={
                  () => {
                      return (<div>Fucking home!!!</div>)
                  }
                } />
                <Route path='/about' render={
                    () => {
                        return (<div>Fucking about!!!</div>)
                    }
                } />
                <Route path='/user/:username' strict render={
                    ({match}) => {
                        return this.state.auth ? <User username={match.params.username}/> : <Redirect to='/auth'/>
                    }
                } />

                <Route path='/auth' strict render={
                    () => {
                        return this.state.auth ? <Redirect to='/'/> : (<div>Unauthorized fucking person!!!</div>)
                    }
                } />
            </div>
        )
    }
}