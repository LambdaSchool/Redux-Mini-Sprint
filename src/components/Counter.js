import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
  // Since I did the stretch today, I decided to add some balance so it didn't seem like we favor incrementation more than decrementation here at LS.

    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        if(this.props.count % 2 !== 0) {
          this.props.increment();
        }
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        return new Promise((res, rej) => {
          setTimeout(() => {
            res(this.props.increment());
          }, 1000);
        });
    };

    decrementIfEven = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        if(this.props.count % 2 == 0) {
          this.props.decrement();
        }
    };

    decrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        return new Promise((res, rej) => {
          setTimeout(() => {
            res(this.props.decrement());
          }, 1000);
        });
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={() => this.props.increment() }>
                    +
                </button>
                <button onClick={() => this.props.decrement() }>
                    -
                </button>
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
                <button onClick={this.decrementIfEven}>
                    Decrement if even
                </button>
                <button onClick={this.decrementAsync}>
                    Decrement async
                </button>
            </p>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
