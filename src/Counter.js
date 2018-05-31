import React from 'react';
import { connect } from 'react-redux';

// Add this function:
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT',count:10 });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(Counter);