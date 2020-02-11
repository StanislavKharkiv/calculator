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
      moneyInMonth: 0,
    };
  }

  handleClickTabs = e => {
    this.setState({ activeTab: e.currentTarget.getAttribute('data-name') });
  };

  handleMoneyCalc = money => {
    this.setState({ moneyInMonth: money });
  };

  render() {
    const { activeTab, msrp, moneyInMonth } = this.state;
    let renderElement = <h1>404</h1>;

    if (activeTab === 'loan') renderElement = <Loan price={msrp} moneyCalc={this.handleMoneyCalc} />;
    if (activeTab === 'lease') renderElement = <Lease />;

    return (
      <>
        <div className="tab-wrapper">
          <Tab
            name="Loan"
            money={moneyInMonth}
            active={activeTab === 'loan' ? 'tab__active' : ''}
            onClick={this.handleClickTabs}
          />
          <Tab
            name="Lease"
            money={555}
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
