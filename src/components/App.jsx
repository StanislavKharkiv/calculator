import React, { Component } from 'react';
import Loan from './Loan/Loan';
import Lease from './Lease/Lease';
import Tab from './Tab/Tab';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msrp: 40000,
      activeTab: 'loan',
      moneyInMonthLoan: 0,
      moneyInMonthLease: 0,
    };
  }

  handleClickTabs = e => {
    this.setState({ activeTab: e.currentTarget.getAttribute('data-name') });
  };

  handleMoneyCalc = (name, money) => {
    this.setState({ [name]: money });
  };

  render() {
    const { activeTab, msrp, moneyInMonthLoan, moneyInMonthLease } = this.state;
    let renderElement = <h1>404</h1>;

    if (activeTab === 'loan') renderElement = <Loan price={msrp} moneyCalc={this.handleMoneyCalc} />;
    if (activeTab === 'lease') renderElement = <Lease price={msrp} moneyCalc={this.handleMoneyCalc} />;

    return (
      <>
        <div className="tab-wrapper">
          <Tab
            name="Loan"
            money={moneyInMonthLoan}
            active={activeTab === 'loan' ? 'tab__active' : ''}
            onClick={this.handleClickTabs}
          />
          <Tab
            name="Lease"
            money={moneyInMonthLease}
            active={activeTab === 'lease' ? 'tab__active' : ''}
            onClick={this.handleClickTabs}
          />
        </div>
        <div className="calc-wrapper">{renderElement}</div>
      </>
    );
  }
}

export default App;
