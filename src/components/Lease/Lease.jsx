import React, { Component } from 'react';
import LeaseInputBlock from '../LeaseInputBlock/LeaseInputBlock';
import SectionBlock from '../SectionBlock/SectionBlock';
import './main.scss';

const creditScoreArr = [600, 650, 700, 750, 800, 850, 900];
const monthArr = [12, 24, 36, 48, 72, 84];
const milesArr = [10000, 12000, 15000];
class Lease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditScore: 750,
      tradeIn: 0,
      termMonth: 36,
      payment: 0,
      miles: 12000,
      postCode: 0,
    };
  }

  componentDidMount() {
    this.leaseCalc();
  }

  leaseCalc = () => {
    const { price, moneyCalc } = this.props;
    const { tradeIn, payment, creditScore, miles, termMonth } = this.state;
    let creditScoreCoefficient;
    if (parseInt(creditScore, 10) <= 650) creditScoreCoefficient = 1.2;
    if (parseInt(creditScore, 10) === 700) creditScoreCoefficient = 1.05;
    if (parseInt(creditScore, 10) === 750) creditScoreCoefficient = 1;
    if (parseInt(creditScore, 10) >= 800) creditScoreCoefficient = 0.95;
    const leaseCalc = (((price - tradeIn - payment) * miles) / 10000 / termMonth) * creditScoreCoefficient;
    moneyCalc('moneyInMonthLease', leaseCalc.toFixed());
  };

  handleSectionBlockChange = e => {
    const promise = new Promise(resolve => {
      this.setState({ [e.target.name]: e.target.value });
      resolve();
    });
    promise.then(() => {
      this.leaseCalc();
    });
  };

  handleInputBlockChange = e => {
    const promise = new Promise(resolve => {
      this.setState({ [e.target.name]: e.target.value });
      resolve();
    });
    promise.then(() => {
      this.leaseCalc();
    });
  };

  render() {
    const { creditScore, postCode, tradeIn, termMonth, payment, miles } = this.state;
    return (
      <section className="lease">
        <LeaseInputBlock
          header="Home ZIP Code"
          value={postCode}
          moneyMask={false}
          onChange={this.handleInputBlockChange}
          name="postCode"
        />
        <SectionBlock
          header="Approx. Credit score"
          valueArr={creditScoreArr}
          defaultValue={creditScore}
          onChange={this.handleSectionBlockChange}
          name="creditScore"
        />
        <LeaseInputBlock
          header="Trade-in Value"
          value={tradeIn}
          moneyMask
          onChange={this.handleInputBlockChange}
          name="tradeIn"
        />
        <SectionBlock
          header="Term (Month)"
          valueArr={monthArr}
          defaultValue={termMonth}
          onChange={this.handleSectionBlockChange}
          name="termMonth"
        />
        <LeaseInputBlock
          header="Down Payment"
          value={payment}
          moneyMask
          onChange={this.handleInputBlockChange}
          name="payment"
        />
        <SectionBlock
          header="Annual Miles"
          valueArr={milesArr}
          defaultValue={miles}
          onChange={this.handleSectionBlockChange}
          name="miles"
        />
      </section>
    );
  }
}

export default Lease;
