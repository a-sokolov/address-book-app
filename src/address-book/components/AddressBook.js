import React, {Component} from 'react'
import PersonList from './PersonList/index'
import persons from './dao/AddressBookDAO.js'
import 'bootstrap/dist/css/bootstrap.css'

export default class AddressBook extends Component {
    state = {
        reverted: false
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">My address book</h1>
                    <button className="btn btn-dark"
                            onClick={this.handleRevertClick}>Revert</button>
                </div>
                <PersonList persons={this.state.reverted ? persons.slice().reverse() : persons} />
            </div>
        )
    }

    handleRevertClick = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}