import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

import { Button, Icon } from 'antd';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

export class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <div style={{ textAlign: 'center', paddingTop: '15px' }}>
                <p>Чтобы начать работу, вы должны <a onClick={this.login}>Авторизоваться</a>!</p>
            </div>
        )
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

export const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated
      ? (
          <div>
            <a href ="/user">
              <Icon type="user"/> Соколов А.В.</a> <a onClick={() => {
                    fakeAuth.signout(() => history.push('/'))
                  }}><Icon type="lock"/>Выйти
            </a>
          </div>
        )
      : (
            <a onClick={() => {
                fakeAuth.authenticate(() => history.push('/'))
              }}>
              <Icon type="unlock"/>Войти
            </a>
        )
))

export default PrivateRoute;

/*
export default function AuthExample () {
    return (
        <Router>
            <div>
                <AuthButton/>
                <ul>
                    <li><Link to="/public">Public Page</Link></li>
                    <li><Link to="/protected">Protected Page</Link></li>
                </ul>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path='/protected' component={Protected} />
            </div>
        </Router>
    )
}*/
