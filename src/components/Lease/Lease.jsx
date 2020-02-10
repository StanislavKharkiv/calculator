import React, { Component } from 'react';

class Lease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: 0,
    };
  }

  render() {
    const { payment } = this.state;
    return (
      <div>
        <h1>Lease</h1>
        <div>{payment}</div>
      </div>
    );
  }
}

export default Lease;
