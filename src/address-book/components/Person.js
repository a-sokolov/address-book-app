import React, {PureComponent} from 'react'
import PhoneNumberList from './PhoneNumberList.js'
import Checkbox from '@jetbrains/ring-ui/components/checkbox/checkbox';
import Button from '@jetbrains/ring-ui/components/button/button';

export default class Person extends PureComponent {
    state = {
        // isVisible: this.props.defaultVisible,
        count: 0
    };

    componentWillMount() {
        console.log(typeof this, 'mounting')
    }

    componentDidMount() {
        console.log(typeof this, 'mounted')
    }

/*    componentWillReceiveProps(nextProps) {
        console.log('will receive props', nextProps);
        if (nextProps.defaultVisible !== this.props.defaultVisible) {
            this.setState({
                isVisible: nextProps.defaultVisible
            })
        }
    }*/

    componentWillUpdate(nextProps, nextState) {
        console.log('will update', nextProps)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did update', prevProps)
    }

    componentWillUnmount() {
        console.log('will unmount')
    }

    render() {
        const {person, isVisible, onButtonClick} = this.props;
        return (
            <div className="card mx-auto" style={{width: '70%'}}>
                <div className="card-header">
                    <h2 onClick={this.handleHeaderClick}>
                        {person.firstName} {person.lastName} {this.state.count}
                        <Button onClick={onButtonClick} primary theme={Button.Theme.LIGHT}>
                            {isVisible ? 'hide phone numbers' : 'show phone numbers'}
                        </Button>
                        <Checkbox defaultChecked>Make some coffee</Checkbox>
                    </h2>
                </div>
                <div className="card-body">
                    <section className="card-text">
                         {person.address.postalCode} {person.address.city} {person.address.street}
                    </section>
                    <div>
                        <h5>
                            {isVisible ? <PhoneNumberList phoneNumbers = {person.phoneNumbers} /> : null}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }

    handleHeaderClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

/*    handleShowNumbersClick = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }*/
}