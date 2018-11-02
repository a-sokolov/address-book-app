import React, {Component} from 'react'
import Person from '../Person.js'
import './style.css'


export default class PersonList extends Component {
    state = {
        openPersonId: null
    }

    render () {
        const persons = this.props.persons;
        const personElements = persons.map((person) =>
            <li key={person.id} className="person-list__li">
                <Person person={person}
                        isVisible={person.id === this.state.openPersonId}
                        onButtonClick={this.handleButtonClick.bind(this, person.id)} />
            </li>
        );

        return (
            <ul>
                {personElements}
            </ul>
        )
    }

    handleButtonClick = openPersonId => {
        this.setState({
            openPersonId: (openPersonId === this.state.openPersonId ? null : openPersonId)
        })
    }
}