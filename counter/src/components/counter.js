import React from 'react';
import {connect} from 'react-redux';
import { counterIncrement, counterDecrement } from '../actions/counter';

class CounterComp extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.counter}</p>
                <button onClick={this.props.onIncrement}>Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(counterIncrement()),
    onDecrement: () => dispatch(counterDecrement())
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComp);

export default CounterContainer;