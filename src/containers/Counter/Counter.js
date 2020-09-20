import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.add5Counter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.subtract5Counter}
        />
        <hr></hr>
        <button onClick={() => this.props.saveResult(this.props.ctr)}>
          Save result
        </button>
        <ul>
          {this.props.rslts.map((rslt) => {
            return (
              <li
                key={rslt.id}
                id={rslt.id}
                onClick={this.props.deleteSpecificResult}
              >
                result: {rslt.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.finalCounter.counter,
    rslts: state.finalResult.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    add5Counter: () => dispatch({ type: "ADD_5", payload: 5 }),
    subtract5Counter: () => dispatch({ type: "SUB_5", payload: 5 }),
    saveResult: (value) => dispatch({ type: "SAVE_RESULT", payload: value }),
    deleteSpecificResult: (event) =>
      dispatch({ type: "DELETE", payload: event.target.id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
