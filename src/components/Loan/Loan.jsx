import React, { Component } from 'react';
import LoanHeader from '../LoanHeader/LoanHeader';
import Month from '../Month/Month';
import InputBlock from '../InputBlock/InputBlock';
import CreditScore from '../CreditScore/CreditScore';
import Taxes from '../Taxes/Taxes';

class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downPayment: 0,
      tradeIn: 0,
      APR: 0,
      months: 36,
      creditScore: '750 - 800',
      postCode: 0,
    };
  }

  handleMonthsChange = e => {
    this.setState({ months: +e.target.textContent });
  };

  handleCreditScoreChange = e => {
    this.setState({ creditScore: e.target.textContent });
  };

  handleInputBlockChange = e => {
    const targetName = e.target.getAttribute('data-name');
    if (targetName === 'trade-in') this.setState({ tradeIn: e.target.value });
    if (targetName === 'payment') this.setState({ downPayment: e.target.value });
    if (targetName === 'apr') this.setState({ APR: e.target.value });
    if (targetName === 'postCode') this.setState({ postCode: e.target.value });
  };

  render() {
    const { months, creditScore, tradeIn, downPayment, APR, postCode } = this.state;
    const { price } = this.props;
    return (
      <section className="loan">
        <LoanHeader price={price} />
        <Month months={months} onClick={this.handleMonthsChange} />
        <InputBlock
          header="Trade-In Value"
          inputSymbol="left"
          value={tradeIn}
          name="trade-in"
          onChange={this.handleInputBlockChange}
        />
        <InputBlock
          header="Down Payment"
          inputSymbol="left"
          value={downPayment}
          name="payment"
          onChange={this.handleInputBlockChange}
        />
        <CreditScore onClick={this.handleCreditScoreChange} value={creditScore} />
        <InputBlock
          header="Estimated APR"
          inputSymbol="right"
          value={APR}
          name="apr"
          onChange={this.handleInputBlockChange}
        />
        <InputBlock
          header="For ZIP Code"
          inputSymbol="*"
          value={postCode}
          name="postCode"
          onChange={this.handleInputBlockChange}
        />
        <Taxes />
      </section>
    );
  }
}

export default Loan;
