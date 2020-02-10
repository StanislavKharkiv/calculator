import React, { Component } from 'react';
import Loan from './Loan/Loan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msrp: 40000,
    };
  }

  render() {
    const { msrp } = this.state;
    return (
      <div className="calc-wrapper">
        <Loan price={msrp} />
      </div>
    );
  }
}

export default App;
